<?php

namespace Drupal\bits_cards\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Drupal\Component\Serialization\Json;

class BitsCardsController extends ControllerBase {

  /**
   * Responds to GET requests.
   *
   * @param Request $request
   *   The request to create the header.
   *
   * @param $blockid
   *   Value captured by parameter.
   *
   * @return array
   *   array in JSON format.
   */
  public function reports($blockid, Request $request) {

    $block = file_get_contents('http://' . $_SERVER['HTTP_HOST'] . '/drupal/block/' . $blockid . '?_format=json');
    //var_dump('http://' . $_SERVER['HTTP_HOST'] . 'drupal/block/' . $blockid . '?_format=json');die(); 

if ($block == NULL) {
      throw new BadRequestHttpException('No entity content received.');
    }
    $obj = Json::decode($block);
    //var_dump($obj['field_logo']);die();
    $field_link = $obj['field_link'][0]['uri'];
    $type = $obj['type'][0]['target_id'];
    $title = $obj['info'][0]['value'];
    switch ($type) {
      case 'whybits':
      //var_dump($obj);die();
        $obj = $obj['field_logo'];
        //var_dump($obj);die();
        $response['data'] = $obj;
        $response['data']['link'] = $field_link;
        $response['data']['title'] = $title;
        //var_dump($response);die();
        break;
      default:
        $response = "For the block '" . $type . "' has not yet been created service";
    }

    return new JsonResponse($response, 200);
  }

}
