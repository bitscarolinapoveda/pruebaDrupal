<?php
/**
 * @file
 * Contains Drupal\bits_cards\BitsCardsOutputJsonCard
 */
namespace Drupal\bits_cards;


use Drupal\adf_cards\Services\ExportConfigCardService;
use Drupal\block\Entity\Block;
use Drupal\file\Entity\File;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Drupal\Component\Serialization\Json;

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
    $response['others'] = $settings['others'] ?? [];

    return $response;

  }

  /**
   * Tratamiento de información a mostrar.
   */
  public function getRenderData($input, $inputType, $idCard) {
    $data = [];
    /*
    dump($idCard);
    dump($input);
    dump($inputType);
    */

    if($input[$inputType]['table_fields'] != ""){
      foreach ($input[$inputType]['table_fields'] as $item) {
        //dump($item);
        $element = [];
        switch ($item['type']) {
          case 'managed_file':

            if ($item['service_field'] == 'image') {

              foreach($item['input'] as $key => $itemimage){

                $file = File::load($itemimage);
                if ($file) {

                  $filename = $file->getFilename();
                  $filename = replaceFilename($filename);

                  if($inputType == 'header'){
                      $element['data'][$key]['title'][] = $filename;
                      $element['data'][$key]['url'][] = file_create_url($file->getFileUri());
                  }
                  if($inputType == 'body'){

                    if($idCard == 'technologies' OR $idCard == 'our_alliance' OR $idCard == 'banner'  ){
                      if($key == '0'){
                        $element['data']['back_movil'][$key]['title'] = $filename;
                        $element['data']['back_movil'][$key]['url'] = file_create_url($file->getFileUri());
                      } else {
                        if($key == '1'){
                          $element['data']['back_desktop'][$key]['title'] = $filename;
                          $element['data']['back_desktop'][$key]['url'] = file_create_url($file->getFileUri());
                        }
                      }

                    } else {
                      $element['data'][$key]['title'] = $filename;
                      $element['data'][$key]['url'] = file_create_url($file->getFileUri());
                    }

                  }
                  if($inputType == 'files'){

                    if($idCard == 'technologies' OR $idCard == 'our_alliance'){
                      $element['data']['logo'][$key]['title'] = $filename;
                      $element['data']['logo'][$key]['image'] = file_create_url($file->getFileUri());
                    } else {
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