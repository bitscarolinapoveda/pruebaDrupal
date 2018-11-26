<?php

namespace Drupal\bits_routes\Controller;

use Drupal\Core\Controller\ControllerBase;

class HomeController extends ControllerBase {

  public function home() {
    return [
      '#type' => 'markup',
      '#markup' => 'Home',
    ];
  }

  public function services() {
    return [
      '#type' => 'markup',
      '#markup' => 'Services',
    ];
  }

  public function projects() {
    return [
      '#type' => 'markup',
      '#markup' => 'Projects',
    ];
  }

  public function products() {
    return [
      '#type' => 'markup',
      '#markup' => 'Products',
    ];
  }

  public function contactUs() {
    return [
      '#type' => 'markup',
      '#markup' => 'Contact us',
    ];
  }
}
