<?php

namespace Drupal\adf_menu\Plugin\rest\resource;

use Drupal\rest\Plugin\ResourceBase;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * Create URL for use rest services.
 *
 * @RestResource(
 *   id = "adf_menu",
 *   label = @Translation("adf_menu"),
 *   uri_paths = {
 *     "canonical" = "/adf_menu/rest/menu",
 *     "https://www.drupal.org/link-relations/create" =
 *   "/adf_menu/rest/menu"
 *   }
 * )
 */
class MenuRestResource extends ResourceBase {

  /**
   * MenuRestResource constructor.
   *
   * @param array $configuration
   *   Configuration data.
   * @param string $plugin_id
   *   Plugin Id.
   * @param mixed $plugin_definition
   *   Plugin definition.
   * @param array $serializer_formats
   *   Serializer formats.
   * @param \Psr\Log\LoggerInterface $logger
   *   Logger service.
   */
  public function __construct(array $configuration,
                              $plugin_id,
                              $plugin_definition,
                              array $serializer_formats,
                              LoggerInterface $logger) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $serializer_formats, $logger);
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->getParameter('serializer.formats'),
      $container->get('logger.factory')->get('adf_menu')
    );
  }

  /**
   * {@inheritdoc}
   */
  public function get() {
    \Drupal::service('page_cache_kill_switch')->trigger();
    print_r("hola");
    return \Drupal::service('adf_menu.menu_rest_services')
      ->get();
  }

    
}
