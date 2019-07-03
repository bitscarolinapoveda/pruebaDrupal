<?php

namespace Drupal\adf_slider\Plugin\rest\resource;

use Psr\Log\LoggerInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Drupal\taxonomy\Entity\Term;
use Drupal\node\Entity\Node;
use Drupal\file\Entity\File;
use Drupal\Core\Session\AccountProxyInterface;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;

/**
 * Create URL for use rest services.
 *
 * @RestResource(
 *   id = "adf_slider",
 *   label = @Translation("adf_slider"),
 *   uri_paths = {
 *     "canonical" = "adf_slider/article"
 *   }
 * )
 */
class SliderRestResource extends ResourceBase {
  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Constructs a new SliderRestResource object.
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
        AccountProxyInterface $current_user
    ) {
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
            $container->get('logger.factory')->get('adf_slider'),
            $container->get('current_user')
        );
  }

  /**
   * Responds to GET requests.
   *
   * @param Symfony\Component\HttpFoundation\Request $request
   *   The request to create the header.
   *
   * @return array
   *   array in JSON format.
   */
  public function get(Request $request) {

    $bundle = 'article';
    $offset = $request->headers->get('offset', 0);
    $limit = $request->headers->get('limit', 10);
    $type = $request->headers->get('type', $bundle);
    $entity_type = 'node';
    $view_mode = 'slide';
    $entity = [];
    $storage = \Drupal::entityTypeManager()->getStorage('entity_view_display');
    $view_display = $storage->load($entity_type . '.' . $bundle . '.' . $view_mode);
    $content = array_keys($view_display->toArray()['content']);
    unset($content[0]);
    $nids = \Drupal::entityQuery('node')
      ->condition('status', 1)
      ->range($offset, $limit)
      ->condition('type', $type)
      ->execute();
    $nodes = Node::loadMultiple($nids);

    if ($nodes == NULL) {
      throw new BadRequestHttpException('No entity content received.');
    }
    else {
      foreach ($nodes as $node) {
        $fid = $node->get('field_image')->getValue()[0]['target_id'];
        $file = File::load($fid);
        $path_image = $file->getFileUri();
        $tid = $node->get('field_tags')->getValue();
        $term_name = '';
        foreach ($tid as $key => $value) {
          $term = Term::load($value['target_id']);
          $term_name .= $term->getName() . ',';
        }
        $entity[$node->id()] = [
          'body' => $node->body->value,
          'field_url_reference' => $node->get('field_url_reference')->getValue()[0]['uri'],
          'field_image' => $path_image,
          'field_tags' => $term_name,
        ];

        foreach ($entity[$node->id()] as $key => $value) {
          if (!in_array($key, $content)) {
            unset($entity[$node->id()][$key]);
          }
        }
        $entity[$node->id()]['title'] = $node->title->value;
      }
    }
    $response = new ResourceResponse($entity, 200);
    $response->addCacheableDependency($entity);

    return $response;

  }

}
