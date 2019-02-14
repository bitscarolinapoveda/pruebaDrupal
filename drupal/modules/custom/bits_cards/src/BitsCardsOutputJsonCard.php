<?php

namespace Drupal\bits_cards;

use Drupal\file\Entity\File;
use Drupal\node\Entity\Node;
use Drupal\block\Entity\Block;
use Drupal\adf_cards\Services\ExportConfigCardService;

/**
 * Class 'BitsCardsOutputJsonCard'.
 */
class BitsCardsOutputJsonCard extends ExportConfigCardService {

  /**
   * {@inheritdoc}
   */
  public function get($block_id) {
    $settings = [];
    $block = Block::load($block_id);

    if ($block) {
      $settings = $block->get('settings');
    }

    $response['header'] = $this->getRenderData($settings, 'header', $settings['id']);
    $response['body'] = $this->getRenderData($settings, 'body', $settings['id']);
    $response['files'] = $this->getRenderData($settings, 'files', $settings['id']);
    $response['others'] = $this->getRenderData($settings, 'others', $settings['id']);
    $response['data'] = [];

    if ($settings['entity'] && $type = $settings['entity']['type']) {
      $name = $settings['entity']['name'] ?? 'node';
      $limit = $settings['entity']['limit'] ?? 6;
      $offset = $settings['entity']['offset'] ?? 0;
      $viewMode = $settings['entity']['default_view_mode'] ?? 'default';
      $conditions = $settings['entity']['conditions'] ?? [];
      $sorts = $settings['entity']['sorts'] ?? [];
      $otherData = [];

      $ids = \Drupal::entityQuery($name)
        ->condition('status', 1)
        ->condition('type', $type)
        ->range($offset, $limit);

      foreach ($conditions as $f => $v) {
        $ids->condition($f, $v);
      }

      foreach ($sorts as $f => $v) {
        $ids->sort($f, $v);
      }

      $ids = $ids->execute();

      // Load nodes.
      $nodes = Node::loadMultiple($ids);

      $fields = \Drupal::entityManager()
        ->getStorage('entity_view_display')
        ->load($name . '.' . $type . '.' . $viewMode)
        ->getComponents();

      foreach ($fields as $name => $field) {
        if (in_array($name, ['title', 'created', 'uid', 'links'])) {
          continue;
        }
        else {
          $otherData[] = $name;
        }
      }

      foreach ($nodes as $node) {
        $data = [
          'nid' => $node->id(),
          'title' => $node->title->value,
        ];

        foreach ($otherData as $field) {
          $type = $node->get($field)->getFieldDefinition()->getType();

          if ($type === 'image') {
            $imageData = $node->get($field)->getValue();
            $data[$field] = [
              'url' => '',
              'alt' => '',
            ];
            if (0 < count($imageData)) {
              $file = \Drupal\file\Entity\File::load($imageData[0]['target_id']);
              $data[$field] = [
                'url' => file_create_url($file->getFileUri()),
                'alt' => $imageData[0]['alt'],
              ];
            }
          }
          elseif ($type === 'text_with_summary') {
            $value = $node->get($field)->getValue();
            $data[$field] = $value[0]['value'];
          }
          else {
            $data[$field] = $node->get($field)->getString();
          }
        }

        $response['data'][] = $data;
      }
    }

    return $response;

  }

  /**
   * Tratamiento de información a mostrar.
   */
  public function getRenderData($input, $inputType, $idCard) {
    $data = [];

    if ($input[$inputType]['table_fields'] != '') {
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
            $element['data']['title'] = $item['input'];

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

    if ($input[$inputType]['steps'] != "") {
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
