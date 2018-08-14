<?php

namespace Drupal\bits_cards\Controller;

use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

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
    $host = substr($_SERVER['HTTP_HOST'], 0, strpos($_SERVER['HTTP_HOST'], ":"));
    if ($host) {
      $block = file_get_contents('http://' . $host . '/block/' . $blockid . '?_format=json');
    } else {
      $block = file_get_contents('http://' . $_SERVER['HTTP_HOST'] . '/block/' . $blockid . '?_format=json');
    }
    if ($block == NULL) {
      throw new BadRequestHttpException('No entity content received.');
    }
    $obj = json_decode($block);
    $field_link = $obj->field_link[0]->uri;
    $type = $obj->type[0]->target_id;
    $title = $obj->info[0]->value;
    switch ($type) {
      case 'whybits':
        $obj = $obj->field_logo;
        $response['data'] = $obj;
        $response['data']['link'] = $field_link;
        $response['data']['title'] = $title;
        break;
      default:
        $response = "For the block '" . $type . "' has not yet been created service";
    }

    $response['method'] = 'GET';

    return new JsonResponse($response, 200);
  }

}
