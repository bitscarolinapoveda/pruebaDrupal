<?php

namespace Drupal\adf_cards\Services;

use Drupal\file\Entity\File;
use Drupal\node\Entity\Node;
use Drupal\block\Entity\Block;
use Drupal\adf_cards\Services\ExportConfigCardService;
use Drupal\taxonomy\Entity\Term;
use Drupal\image\Entity\ImageStyle;
use Drupal\rest\ResourceResponse;
use Drupal\Core\Cache\CacheableMetadata;

/**
 * Class 'BitsCardsOutputJsonCard'.
 */
class BitsCardsOutputJsonCard {

  /**
   * {@inheritdoc}
   */
  public function get($block_id, $prodServ = '') {
    $settings = [];
    $node_tags = [];
    $block = Block::load($block_id);

    if ($block) {
      $settings = $block->get('settings');
    }

    $response['header'] = $this->getRenderData($settings, 'header', $settings['id']);
    $response['body'] = $this->getRenderData($settings, 'body', $settings['id']);
    $response['files'] = $this->getRenderData($settings, 'files', $settings['id']);
    $response['others'] = $this->getRenderData($settings, 'others', $settings['id']);
    $response['data'] = [];

    if ($settings['entity']) {
      $name = $settings['entity']['name'] ?? 'node';
      $limit = $settings['entity']['limit'] ?? 6;
      $offset = $settings['entity']['offset'] ?? 0;
      $viewMode = $settings['entity']['default_view_mode'] ?? 'default';
      $conditions = $settings['entity']['conditions'] ?? [];
      $sorts = $settings['entity']['sorts'] ?? [];
      $otherData = [];

      $ids = \Drupal::entityQuery($name)
        ->condition('status', 1);

      foreach ($conditions as $f => $v) {
        $ids->condition($f, $v);
      }
      foreach ($sorts as $f => $v) {
        $ids->sort($f, $v);
      }
      if ($type = $settings['entity']['type']) {
        $ids->condition('type', $type);
      }
      $ids->range($offset, $limit);

      $ids = $ids->execute();

      // Load nodes.
      $nodes = \Drupal::entityTypeManager()->getStorage($name)->loadMultiple($ids);

      $queryFields = \Drupal::entityTypeManager() // se cambia entityManager por entityTypeManager esta depreciado
        ->getStorage('entity_view_display')
        ->load($name . '.' . $type . '.' . $viewMode);

      $fields = [];
      if ($queryFields) {
        $fields = $queryFields->getComponents();
        $isContentEntity = true;
      }
      //  Si no es una entidad de contenido intenta como de configuración
      else {
        $nodes_values = array_values($nodes); // se separo function para evitar error "only variables should be passed by reference"
        $fields = get_object_vars(array_shift($nodes_values));
        $isContentEntity = false;
      }

      foreach ($fields as $name => $field) {
        if (in_array($name, ['title', 'created', 'uid', 'links'])) {
          continue;
        }
        else {
          // Se muestra el campo, siempre que no esté oculto
          // en el tipo de presentación.
          if (isset($field['label'])) { // valida si esta configurado el label
            if ($field['label'] != 'hidden') {
              $otherData[] = $name;
            }
          }elseif( is_string($field) || is_array($field) ){ // se agrego validacion si es un array o un string
            $otherData[] = $name;
          }
        }
      }

      foreach ($nodes as $node) {
        $tag = $node->getEntityTypeId().'_list';
        if(!in_array( $tag, $node_tags))
        array_push($node_tags, $tag);
        if ($isContentEntity) {
          $data = [
            'nid' => $node->id(),
            'title' => $node->title->value,
          ];
        }
        else {
          $data = [
            'nid' => $node->id(),
            'label' => $node->label(),
          ];
        }

        foreach ($otherData as $field) {
          if ($isContentEntity) {
            $type = $node->get($field)->getFieldDefinition()->getType();

            if ($type === 'image') {
              $imageData = $node->get($field)->getValue();
              $data[$field] = [
                'url' => '',
                'alt' => '',
              ];
              if (0 < count($imageData)) {
                $file = File::load($imageData[0]['target_id']);
                $style_image = $fields[$field]['settings']['image_style']; //trae el estilo de imagen asociado
                if (!empty($style_image)) {
                  $data[$field] = [
                    'url' => ImageStyle::load($style_image)->buildUrl($file->getFileUri()), // crea la url con el estilo de imagen asociado
                  ];
                }
                else {
                  $data[$field] = [
                    'url' => file_create_url($file->getFileUri()),
                  ];
                }
                $data[$field]['alt'] = $imageData[0]['alt'];
              }
            }
            elseif ($type === 'text_with_summary') {
              $value = $node->get($field)->getValue();
              $data[$field] = $value[0]['value'];
            }
            elseif ($type === 'entity_reference'){
              $tid = $node->get($field)->getValue();
              $dataDefinition = $node->get($field)->getSetting('handler');
              foreach ($tid as $key => $value) {
                $terms_name = '';
                if ($dataDefinition == "default:taxonomy_term") {
                  $term = Term::load($value['target_id']);
                }
                elseif ($dataDefinition == "default:service_product_bits") {
                  $entityName = explode(':',$dataDefinition)[1];
                  $term = \Drupal::entityTypeManager()->getStorage($entityName)->load($value['target_id']);
                }
                $data[$field][] = ['id' => $term->id(), 'label'=> $term->label()];
              }
            }
            elseif ($type === 'link'){
              $tid = $node->get($field)->getValue();
              $data[$field] = $tid;
            }
            else {
              $data[$field] = $node->get($field)->getString();
            }
          }
          else {
            if (method_exists($node, 'getValueJson')) {
              $value = $node->getValueJson($field, '');
              $data[$field] = $value;
            }
            else {
              $node = (array) $node;
              $data[$field] = $node[$field];
            }
          }


        }

        $response['data'][] = $data;
      }
    }

    $resource = new ResourceResponse($response);
    $tag = str_replace("_","", $block_id);
    $tag = str_replace('-',"", $tag);
    array_push($node_tags,$tag);
    $resource->addCacheableDependency(CacheableMetadata::createFromRenderArray(
      [
        '#cache' => ['tags' => $node_tags, ],
      ]
    ));
    return $resource;

  }

  /**
   * Tratamiento de información a mostrar.
   */
  public function getRenderData($input, $inputType, $idCard) {
    $data = [];

    if (!empty($input[$inputType]['table_fields'])) { // !empty permite evaluar si existe y no esta vacio
      foreach ($input[$inputType]['table_fields'] as $item) {
        $element = [];
        switch ($item['type']) {
          case 'managed_file':
            if ($item['service_field'] == 'image') {
              foreach ($item['input'] as $key => $itemimage) {
                $file = File::load($itemimage);
                if ($file) {
                  $filename = $file->getFilename();
                  $filename = replaceFilename($filename);

                  if ($inputType == 'header') {
                    if ($idCard == 'brand_card') {
                      $element['data'][$key]['title'] = $filename;
                      $element['data'][$key]['url'] = file_create_url($file->getFileUri());
                    }
                    else {
                      $element['data'][$key]['title'][] = $filename;
                      $element['data'][$key]['url'][] = file_create_url($file->getFileUri());
                    }
                  }
                  if ($inputType == 'body') {
                    if ($idCard == 'technologies' || $idCard == 'our_alliance' || $idCard == 'banner') {
                      if ($key == '0') {
                        $element['data']['back_movil']['0']['title'] = $filename;
                        $element['data']['back_movil']['0']['url'] = file_create_url($file->getFileUri());
                      }
                      else {
                        if ($key == '1') {
                          $element['data']['back_desktop']['0']['title'] = $filename;
                          $element['data']['back_desktop']['0']['url'] = file_create_url($file->getFileUri());
                        }
                      }
                    }
                    else {
                      $element['data'][$key]['title'] = $filename;
                      $element['data'][$key]['url'] = file_create_url($file->getFileUri());
                    }
                  }
                  if ($inputType == 'files') {
                    if ($idCard == 'technologies' || $idCard == 'our_alliance') {
                      $element['data']['logo'][$key]['title'] = $filename;
                      $element['data']['logo'][$key]['image'] = file_create_url($file->getFileUri());
                    }
                    else {
                      $element['data'][$key]['title'] = $filename;
                      $element['data'][$key]['url'] = file_create_url($file->getFileUri());
                    }
                  }
                }
              }
            }
            break;

          case 'text_format':
            $element['data'] = $item['input']['value'];
            $element['type'] = 'formated';
            break;

          case 'url':
            $element['data'] = [
              'link' => $item['input']['link'],
              'label' => $item['input']['label'],
            ];
            $element['type'] = 'url';
            break;

          case 'textfield':
            $element['data'][preg_replace('@[^a-z0-9-]+@','_', strtolower($item['service_field']))] = $item['input'];

            break;

          default:
            $element['data'] = $item['input'];
            $element['type'] = 'default';
            break;
        }

        if ($item['show'] == 1) {
          $data[] = $element;
        }

      }
    }

    if (!empty($input[$inputType]['steps'])) { // !empty permite evaluar si existe y no esta vacio
      foreach ($input[$inputType]['steps'] as $key => $itemOther) {
        $elements = [];

        $elements['description'] = $itemOther['description'];
        $elements['data'] = [
          'url' => $itemOther['link']['url'],
          'text' => $itemOther['link']['text'],
        ];

        $data[] = $elements;
      }
    }

    return $data;
  }

}

/**
 * {@inheritdoc}
 */
function replaceFilename($inputfilename) {
  $extensionfile = ['.png', '.jpg', '.jpeg', '.pdf'];
  $inputfilename = str_replace($extensionfile, '', $inputfilename);
  $separatorfile = ['-', '_'];
  $inputfilename = str_replace($separatorfile, ' ', $inputfilename);

  return $inputfilename;
}
