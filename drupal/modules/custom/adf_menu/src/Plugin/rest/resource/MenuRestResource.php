<?php

namespace Drupal\adf_menu\Plugin\rest\resource;

use Drupal\Core\Entity\EntityManagerInterface;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Drupal\Core\Menu\MenuTreeParameters;
use Drupal\Core\Url;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\Core\Menu\MenuLinkInterface;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Psr\Log\LoggerInterface;

/**
 * Create URL for use rest services.
 *
 * @RestResource(
 *   id = "adf_menu",
 *   label = @Translation("adf_menu"),
 *   uri_paths = {
 *     "canonical" = "/api/adf_menu/{main}",
 *     "https://www.drupal.org/link-relations/create" =
 *   "/api/adf_menu/{main}"
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
   * @param \Drupal\Core\Session\AccountProxyInterface $current_user
   *   A current user instance.
   */
  public function __construct(array $configuration,
                              $plugin_id,
                              $plugin_definition,
                              array $serializer_formats,
                              LoggerInterface $logger,
                              AccountProxyInterface $current_user) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $serializer_formats, $logger);
    $this->currentUser = $current_user;                            
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
      $container->get('logger.factory')->get('adf_menu'),
      $container->get('current_user')
    );
  }


  /**
   * Responds to GET requests.
   *
   * Returns a list of menu items for specified menu name.
   *
   * @param string|null $menu_name
   *   The menu name.
   *
   * @return \Drupal\rest\ResourceResponse
   *   The response containing a list of bundle names.
   * 
   * @throws \Symfony\Component\HttpKernel\Exception\HttpException
   *   Throws exception expected.
   * 
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   */


  /**
   * {@inheritdoc}
   */

  public function get() {
    \Drupal::service('page_cache_kill_switch')->trigger();
    print_r("hola: loss");

    if (!$this->currentUser->hasPermission('access content')) {
      throw new AccessDeniedHttpException();
    }


    $entities = \Drupal::entityTypeManager()
      ->getStorage('node')
      ->loadMultiple();
    foreach ($entities as $entity) {
      $result[$entity->id()] = $entity->title->value;
    }
  
    return \Drupal::service('adf_menu.menu_rest_services')
     ->get();


   }




    
}
