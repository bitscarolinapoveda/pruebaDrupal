<?php

namespace Drupal\bits_routes\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Routing\TrustedRedirectResponse;

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

  public function projectId($name) {
    return [
      '#type' => 'markup',
      '#markup' => 'Project id ' . $name,
    ];
  }
  public function serviceId($name) {
    return [
      '#type' => 'markup',
      '#markup' => 'Service id ' . $name,
    ];
  }

  public function productId($name) {
    return [
      '#type' => 'markup',
      '#markup' => 'Project id ' . $name,
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
  public function blockedHome() {
    return [
      '#theme' => 'page__home',
      '#homeorerrorpage' => TRUE,
    ];
  }

  public function notfound404() {
    return [
      '#theme' => 'page__404',
      '#homeorerrorpage' => TRUE,
    ];
  }
  public function forbidden403() {
    return [
      "#theme" => 'page__403',
      '#homeorerrorpage' => TRUE,
    ];
  }
}
