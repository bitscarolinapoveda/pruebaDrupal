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

  public function serviceId() {
    return [
      '#type' => 'markup',
      '#markup' => 'Service id',
    ];
  }

  public function projectId() {
    return [
      '#type' => 'markup',
      '#markup' => 'Project id',
    ];
  }

  public function products() {
    return [
      '#type' => 'markup',
      '#markup' => 'Products',
    ];
  }

  public function aboutUs() {
    return [
      '#type' => 'markup',
      '#markup' => 'About us',
    ];
  }

  public function contactUs() {
    return [
      '#type' => 'markup',
      '#markup' => 'Contact us',
    ];
  }
}
