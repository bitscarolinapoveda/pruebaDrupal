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
    /*
    $response['header'] = $this->getRenderData($settings['header']);
    $response['body'] = $this->getRenderData($settings['body']);
    $response["archivos"] = $this->getRenderData($settings['archivos']);
    */
    $response['header'] = $this->getRenderData($settings, 'header', $settings['id']);
    $response['body'] = $this->getRenderData($settings, 'body', $settings['id']);
    $response['files'] = $this->getRenderData($settings, 'files', $settings['id']);
    $response['others'] = $settings['others'] ?? [];

    return $response;
  }

  /**
   * Tratamiento de información a mostrar.
   */
  public function getRenderData($input, $inputType, $idCard) {
    $data = [];

    if($input[$inputType]['table_fields'] != ""){
      foreach ($input[$inputType]['table_fields'] as $item) {

        $element = [];
        switch ($item['type']) {
          case 'managed_file':

            if ($item['service_field'] == 'image') {

              foreach($item['input'] as $key => $itemimage){

                $file = File::load($itemimage);
                if ($file) {

                  $filename = $file->getFilename();
                  $filename = replaceFilename($filename);
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
    }

    return $data;
  }

}

  /**
   * {@inheritdoc}
   */
  function replaceFilename($inputfilename) {

    $extensionfile = ['.png', '.jpg', '.jpeg', '.pdf'];
    $inputfilename = str_replace($extensionfile,"", $inputfilename);
    $separatorfile = ['-', '_'];
    $inputfilename = str_replace($separatorfile," ", $inputfilename);

    return $inputfilename;

  }