<?php

namespace Drupal\bits_security\Routing;

use Drupal\Core\Routing\RouteSubscriberBase;
use Symfony\Component\Routing\RouteCollection;

/**
 * Listens to the dynamic route events.
 */
class RouteSubscriber extends RouteSubscriberBase {

  /**
   * {@inheritdoc}
   */
  protected function alterRoutes(RouteCollection $collection) {
    $config = \Drupal::config('bits_security.settings');
    // vars for routes.
    $route_login = $collection->get('user.login');
    $route_register = $collection->get('user.register');
    $route_password = $collection->get('user.pass');
    $route_logout = $collection->get('user.logout');
    $route_profile = $collection->get('user.page');

    // Change path '/user/login'.
    if (!empty($config->get('login_path'))) {
      $route_login->setPath($config->get('login_path'));
    }
    // Change path '/user/register'.
    if (!empty($config->get('register_path'))) {
      $route_register->setPath($config->get('register_path'));
    }
    // Change path '/user/password'.
    if (!empty($config->get('password_path'))) {
      $route_password->setPath($config->get('password_path'));
    }
     // Change path '/user'.
    if (!empty($config->get('profile_path'))) {
      $route_logout->setPath($config->get('profile_path'));
    }
    // Change path to '/user/logout'.
    if (!empty($config->get('logout_path'))) {
      $route_profile->setPath($config->get('logout_path'));
    }
  }

}
