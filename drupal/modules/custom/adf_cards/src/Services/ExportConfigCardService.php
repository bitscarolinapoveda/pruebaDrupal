<?php

namespace Drupal\adf_cards\Services;

use Drupal\block\Entity\Block;
use Drupal\file\Entity\File;
use Drupal\Component\Serialization\Json;

/**
 * Provides a resource to get view modes by entity and bundle.
 */
class ExportConfigCardService {

  /**
   * {@inheritdoc}
   */
  public function get($block_id) {
    $settings = [];
    $block = Block::load($block_id);
    if ($block) {
      $settings = $block->get('settings');
    }
    $response['header'] = $this->getRenderData($settings['header']);
    $response['body'] = $this->getRenderData($settings['body']);
    $response["archivos"] = $this->getRenderData($settings['archivos']);
    $response['others'] = $settings['others'] ?? [];
    $fieldBock = [
      'alliances' => [
        'field_logo',
        'field_background',
        'field_backgroundmovil',
      ],
      'whybits' => [
        'field_link',
        'field_logo',
      ],
      'tecnologies' => [
        'field_logo',
        'field_background',
        'field_backgroundmovil',
      ],
    ];
    if (isset($block->getDependencies()['content'])) {
      foreach ($block->getDependencies()['content'] as $value) {
        $condicion = explode(':', $value);
        $block_storage = \Drupal::entityTypeManager()->getStorage($condicion[0])->loadByProperties(['uuid' => $condicion[2], 'type' => $condicion[1]]);
        foreach ($block_storage as $blockData) {
          foreach ($fieldBock[$condicion[1]] as $field) {
            foreach ($blockData->get($field)->getValue() as $valueField) {
              if (isset($valueField['target_id'])) {
                $file = File::load($valueField['target_id']);

                $file_uri = $file->getFileUri();
                $file_url = file_create_url($file_uri);
                $valueRes = $valueField;
                $valueRes['path'] = $file_url;
                $response['fields'][][$field] = $valueRes;
              }
              else {
                $response['fields'][][$field] = $valueField;
              }
            }
          }
        }
      }
    }
    return $response;
  }

  /**
   * Tratamiento de información a mostrar.
   */
  public function getRenderData($input) {
    $data = [];

    foreach ($input['table_fields'] as $item) {
      //dump($item);
      $element = [];
      switch ($item['type']) {
        case 'managed_file':

          if ($item['service_field'] == 'image') {
            foreach($item['input'] as $key => $itemimage){

              $file = File::load($itemimage);
              if ($file) {
                $filename = $file->getFilename();
                $extensionfile = ['.png', '.jpg', '.jpeg', '.pdf'];
                $filename = str_replace($extensionfile,"",$filename);
                $separatorfile = ['-', '_'];
                $filename = str_replace($separatorfile," ",$filename);
                $element["title"][$key] = $filename;
                $element["data"][$key] = file_create_url($file->getFileUri());
                $element['type'] = 'image';
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

        default:
          $element['data'] = $item['input'];
          $element['type'] = 'default';
          break;
      }

      if ($item['show'] == 1) {
        $data[] = $element;
      }
    }


    return $data;
  }

}
