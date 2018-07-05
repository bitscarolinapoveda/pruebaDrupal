<?php

namespace Drupal\adf_locations\Plugin\rest\resource;

use Drupal\Core\Session\AccountProxyInterface;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * Provides a resource to get view modes by entity and bundle.
 *
 * @RestResource(
 *   id = "location_rest_resources",
 *   label = @Translation("Location Rest Resources"),
 *   uri_paths = {
 *     "canonical" = "/location-resources"
 *   }
 * )
 */
class LocationRestResources extends ResourceBase {

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new LocationRestResources object.
   *
   * @param array $configuration
   *   A configuration array containing information about the plugin instance.
   * @param string $plugin_id
   *   The plugin_id for the plugin instance.
   * @param mixed $plugin_definition
   *   The plugin implementation definition.
   * @param array $serializer_formats
   *   The available serialization formats.
   * @param \Psr\Log\LoggerInterface $logger
   *   A logger instance.
   * @param \Drupal\Core\Session\AccountProxyInterface $current_user
   *   A current user instance.
   */
  public function __construct(
    array $configuration,
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
      $container->get('logger.factory')->get('adf_locations'),
      $container->get('current_user')
    );
  }

  /**
   * Responds to GET requests.
   *
   * @param Request $request
   *   The request to create the header.
   * @param array $params
   *   The array with some parameters.
   *
   * @return array
   array in JSON format.
   */
  public function get(Request $request, $params = NULL) {

    $offset = $request->headers->get('offset', 0);
    $limit = $request->headers->get('limit', 10);
    $entity = [];
    $nids = \Drupal::entityQuery('node')
      ->condition('status', 1)
      ->range($offset, $limit)
      ->condition('type', 'locations')
      ->sort('title')
      ->execute();
    $nodes = \Drupal\node\Entity\Node::loadMultiple($nids);
    foreach ($nodes as $node) {
      $entity[] = [
        'address'   => $node->title->value,
        'telephone' => $node->field_telephone->value,
        'lat'       => $node->field_location->lat,
        'lng'       => $node->field_location->lng,
      ];
    }
    $response = new ResourceResponse($entity, 200);
    $response->addCacheableDependency($entity);

    return $response;

  }

}
