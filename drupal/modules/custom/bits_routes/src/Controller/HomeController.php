<?php

namespace Drupal\bits_routes\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Class HomeController.
 */
class HomeController extends ControllerBase {

  /**
   * Hello.
   *
   * @return string
   *   Return Hello string.
   */
  public function hello() {
    return [
      '#type' => 'markup',
      '#markup' => $this->t('Implement method: hello')
    ];
  }

}
