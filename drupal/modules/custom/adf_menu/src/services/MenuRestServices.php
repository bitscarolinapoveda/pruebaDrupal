<?php

namespace Drupal\adf_menu\services;

use Drupal\Core\Session\AccountInterface;
use Drupal\rest\ResourceResponse;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;


/**
 * Class MenuRestServices.
 *
 * @package Drupal\adf_menu\services
 */
class MenuRestServices {

  protected $api;

  protected $send;

  protected $currentUser;

  protected $segment;

  /**
   * {@inheritdoc}
   */
  public function get() {
    

   /* if (!$this->currentUser->hasPermission('access content')) {
      throw new AccessDeniedHttpException();
    }*/

    // The first time we load the block, the call will be through GET,
    // so we use the Session info.
    $response = $_SESSION['serviceDetail'];
    return new ResourceResponse('response');
  }

  /**
   * Post.
   *
   * @param array $data
   *   Data for the service call.
   *
   * @return \Drupal\rest\ResourceResponse
   *   Resource Response object.
   */

}
