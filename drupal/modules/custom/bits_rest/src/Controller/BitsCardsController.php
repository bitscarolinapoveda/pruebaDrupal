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

    $block = file_get_contents('http://' . $_SERVER['HTTP_HOST'] . '/block/' . $blockid . '?_format=json');


    if ($block == NULL) {
      throw new BadRequestHttpException('No entity content received.');
    }
    $obj = Json::decode($block);
    $field_link = $obj['field_link'][0]['uri'];
    $type = $obj['type'][0]['target_id'];
    $title = $obj['info'][0]['value'];

    switch ($type) {
      case 'whybitss':
        $obj = $obj['field_logo'];
        $response ['data'] = $obj;
        $response['data']['link'] = $field_link;
        $response['data']['title'] = $title;
        break;

      case 'tecnologiesx':
      case 'alliances':
        $response['data']['back_movil'] = $obj['field_backgroundmovil'];
        $response['data']['background'] = $obj['field_background'];
        $response['data']['logo'] = $obj['field_logo'];
        $response['data']['link'] = $field_link;
        $response['data']['title'] = $title;
        break;

      default:
        $response = "For the block '" . $type . "' has not yet been created service";
    }

    return new JsonResponse($response, 200);
  }

}
