<?php

namespace Drupal\adf_cards\Services;

use Drupal\file\Entity\File;
use Drupal\node\Entity\Node;
use Drupal\block\Entity\Block;
use Drupal\adf_cards\Services\ExportConfigCardService;
use Drupal\taxonomy\Entity\Term;
use Drupal\image\Entity\ImageStyle;
use Drupal\responsive_image\Entity\ResponsiveImageStyle;
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
    $language = \Drupal::languageManager()->getCurrentLanguage()->getId();

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
      $ids_weight = isset($settings['entity']['weight']) ? $settings['entity']['weight'] : [] ;
      $temp = [];
      foreach ($ids as $key => $value) {
        if(isset($ids_weight[$value]) && !isset($temp[$ids_weight[$value]] ) ){
          $temp[$ids_weight[$value]] = $value;
          unset($ids[$key]);
        }
      }
      ksort($temp);
      $ids = $temp + $ids;

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
        $fields = count($nodes_values) > 0 ? get_object_vars(array_shift($nodes_values)) : [];
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
        $tag = $node->getEntityType()->getListCacheTags();
        if($language != 'es' &&  $isContentEntity){
          if ($node->hasTranslation($language)) {
            $node = $node->getTranslation($language);
          }
          else{
            continue;
          }
        }
        if(!in_array( $tag[0], $node_tags))
        array_push($node_tags, $tag[0]);
        $url = $node->toUrl()->toString(TRUE);
        $url = $url->getGeneratedUrl();
        $url = (strpos($url, 'node') === false) ? $url : '';

        if ($isContentEntity) {
          $data = [
            'nid' => $node->id(),
            'title' => $node->title->value,
            'url' => $url,
          ];

          $languages = \Drupal::languageManager()->getLanguages();
          foreach ($languages as $key => $value) {
            $otherURL = \Drupal::service('path.alias_manager')->getAliasByPath('/node/'.$node->id(), $key);
            $otherURL = (strpos($url, 'node') === false) ? $otherURL : '';
            if ($key != 'es') {
              $otherURL = '/' . $key . $otherURL;
            }
            $data['others_urls'][$key] = $otherURL;
          }

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
              foreach ((array) $imageData as $key => $value) {
                $file = File::load($imageData[$key]['target_id']);

                if (!empty($fields[$field]['settings']['image_style'])) {
                  $style_image = $fields[$field]['settings']['image_style']; //trae el estilo de imagen asociado
                  $data[$field][$key] = [
                    'url' => ImageStyle::load($style_image)->buildUrl($file->getFileUri()), // crea la url con el estilo de imagen asociado
                    'alt' => $imageData[$key]['alt'],
                  ];
                }
                elseif (!empty($fields[$field]['settings']['responsive_image_style'])) {
                  $responsive_image = ResponsiveImageStyle::load($fields[$field]['settings']['responsive_image_style']);
                  $styles_image = $responsive_image->get('image_style_mappings')[0]['image_mapping']['sizes_image_styles'];
                  foreach ($styles_image as $key2 => $value) {
                    $data[$field][$value] = [
                      'url' => ImageStyle::load($value)->buildUrl($file->getFileUri()), // crea la url con el estilo de imagen asociado
                      'alt' => $imageData[$key]['alt'],
                    ];
                  }
                }
                else {
                  $data[$field][$key] = [
                    'url' => file_create_url($file->getFileUri()),
                    'alt' => $imageData[$key]['alt'],
                  ];
                }
              }
            }
            elseif ($type === 'text_with_summary') {
              $value = $node->get($field)->getValue();
              $data[$field] = $value[0]['value'];
              if(isset($value[0]['summary'])) {
                $data[$field . '_summary'] = $value[0]['summary'];
              }
            }
            elseif ($type === 'entity_reference'){
              $tid = $node->get($field)->getValue();
              $dataDefinition = $node->get($field)->getSetting('handler');
              for($i = 0;$i<count($tid);$i++){
                $value = $tid[$i];
                if ($dataDefinition == "default:taxonomy_term") {
                  $term = Term::load($value['target_id']);
                }
                elseif ($dataDefinition == "default:service_product_bits") {
                  $entityName = explode(':',$dataDefinition)[1];
                  $term = \Drupal::entityTypeManager()->getStorage($entityName)->load($value['target_id']);
                }
                elseif ($dataDefinition == "default:node") {
                  $term = Node::load($value['target_id']);
                }
                if (!is_null($term)) {
                  $termUuid = '';
                  if (method_exists($term, 'uuid')) {
                    $termUuid = $term->uuid();
                  }
                  $data[$field][] = ['id' => $term->id(), 'uuid' => $termUuid, 'label'=> $term->label()];


                }
              }
            }
            elseif ($type === 'link'){
              $link = $node->get($field)->getValue();
              if (count($link) > 0) {
                $url = $node->get($field)[0]->getUrl();
                if($url->isRouted()){
                  try {
                    $route = $url->getRouteName();
                    $parameters = $url->getRouteParameters(); // obtiene los parametetros enviados al route
                    $generator = \Drupal::urlGenerator(); //permite crear urls desde drupal
                    $path = '/'.$generator->getPathFromRoute($route, $parameters); //crea la url desde el route name si pertenece a drupal
                  } catch (\Throwable $th) {
                    $path = $th['message'];
                  }
                }
                else{
                  $path = $url->toString(); //devuelve la url si no pertenece a drupal
                }

                if (strpos($path, 'node') !== false ) {
                  $alias = \Drupal::service('path.alias_manager')->getAliasByPath($path);
                  $path = (strpos($alias, 'node') === false) ? $alias : '';
                }
                $link = $node->get($field)->getValue();
                $link[0]['uri'] = $path;
                $link[0]['external'] = $url->isExternal();
              }

              $data[$field] = $link;
            }
            elseif ($type === 'text_long'){
              $text = $node->get($field)->getValue();
              $data[$field] = $text[0]['value'];
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
      foreach ($input[$inputType]['table_fields'] as $item_key => $item) {
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
                    elseif ($idCard == 'header_brand_card') {
                      $element[$item_key][$key]['title'] = $filename;
                      $element[$item_key][$key]['url'] = file_create_url($file->getFileUri());
                    }
                    else {
                      $element['data'][$key]['title'][] = $filename;
                      $element['data'][$key]['url'][] = file_create_url($file->getFileUri());
                    }
                  }
                  if ($inputType == 'body') {
                    if ($idCard == 'technologies' || $idCard == 'our_alliance' || $idCard == 'banner' || $idCard == 'footer_block_simple') {
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
              'external' => strpos($item['input']['link'], '/') !== 0 ? TRUE : FALSE ,
            ];
            $element['type'] = 'url';
            break;

          case 'textfield':
            $element['data'][preg_replace('@[^a-z0-9-]+@','_', strtolower($item['service_field']))] = $item['input'];
            break;

          case 'select' || 'checkboxes' || 'radios':
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

    elseif (!empty($input[$inputType]) && $inputType == 'others') { // !empty permite evaluar si existe y no esta vacio
      foreach ($input[$inputType] as $key => $itemOther) {
        $elements = [];
        if($itemOther['type'] == 'checkboxes'){
          foreach ($itemOther['options'] as $id => $label) {
            $elements[$key][$id]['id'] = $id;
            $elements[$key][$id]['label'] = $label;
            $elements[$key][$id]['status'] = ($itemOther[$id] !== 0) ? TRUE : FALSE;
          }
        }
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
