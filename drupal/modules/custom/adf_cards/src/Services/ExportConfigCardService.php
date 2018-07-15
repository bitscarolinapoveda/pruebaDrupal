<?php

namespace Drupal\adf_cards\Services;

use Drupal\block\Entity\Block;
use Drupal\file\Entity\File;

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
    $response['others'] = $settings['others'] ?? [];

    return $response;
  }

  /**
   * Tratamiento de información a mostrar.
   */
  public function getRenderData($input) {
    $data = [];

    foreach ($input['table_fields'] as $item) {
      $element = [];
      switch ($item['type']) {
        case 'managed_file':
          if ($item['service_field'] == 'image') {
            $file = File::load(reset($item['input']));
            if ($file) {
              $element['data'] = file_create_url($file->getFileUri());
              $element['type'] = 'image';
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
