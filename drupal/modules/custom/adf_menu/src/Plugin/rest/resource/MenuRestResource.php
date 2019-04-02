<?php

namespace Drupal\adf_menu\Plugin\rest\resource;

use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Drupal\Core\Menu\MenuTreeParameters;
use Drupal\Core\Url;
use Drupal\Core\Session\AccountProxyInterface;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Psr\Log\LoggerInterface;
use Drupal\file\Entity\File;

/**
 * Create URL for use rest services.
 *
 * @RestResource(
 *   id = "adf_menu",
 *   label = @Translation("adf_menu"),
 *   uri_paths = {
 *     "canonical" = "adf_menu/{main}"
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
   * @param \Drupal\Core\Entity\EntityTypeManagerInterface $entity_manager
   *   A instance of entity manager.
   * @param \Drupal\Core\Session\AccountProxyInterface $current_user
   *   A current user instance.
   */

  /**
   * A list of menu items.
   *
   * @var array
   */
  protected $menuDetails = [];

  /**
   * A instance of entity manager.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;

  /**
   * A current user instance.
   *
   * @var \Drupal\Core\Session\AccountProxyInterface
   */
  protected $currentUser;

  /**
   * Implement _construct().
   */
  public function __construct(array $configuration,
                              $plugin_id,
                              $plugin_definition,
                              array $serializer_formats,
                              LoggerInterface $logger,
                              EntityTypeManagerInterface $entity_manager,
                              AccountProxyInterface $current_user) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $serializer_formats, $logger);

    $this->entityTypeManager = $entity_manager;
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
      $container->get('logger.factory')->get('rest'),
      $container->get('entity_type.manager'),
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
  public function get($menuName) {

    if (!$this->currentUser->hasPermission('access content')) {
      throw new AccessDeniedHttpException();
    }

    if ($menuName) {

      $parameters = new MenuTreeParameters();
      $parameters->onlyEnabledLinks();

      $menu_tree_detail = \Drupal::menuTree();
      $tree = $menu_tree_detail->load($menuName, $parameters);

      if (empty($tree)) {
        return new ResourceResponse($tree);
      }

      $manipulators = [
        ['callable' => 'menu.default_tree_manipulators:checkAccess'],
        ['callable' => 'menu.default_tree_manipulators:generateIndexAndSort'],
      ];
      $tree = $menu_tree_detail->transform($tree, $manipulators);

      foreach ($tree as $key => $item) {
        $this->menuDetails[$key] = $this->getItemDetails($item);
        if($item->hasChildren){
          $index = 0;
          foreach ($item->subtree as $subitem) {
            $this->menuDetails[$key]['below'][$index] = $this->getItemDetails($subitem);
            if($subitem->hasChildren){
              $index2 = 0;
              foreach ($subitem->subtree as $subitem2) {
                $this->menuDetails[$key]['below'][$index]['below'][$index2] = $this->getItemDetails($subitem2);
                $index2 ++;
              }
            }
            $index ++;
          }
        }
      }

      $response = new ResourceResponse(array_values($this->menuDetails));
      $response->addCacheableDependency($this->menuDetails);

      return $response;
    }

    throw new HttpException(t("Menu name is required parameter"));
  }


  protected function getItemDetails($item){
    $url = $item->link->getUrlObject();
    $route = $item->link->getRouteName();
    $parameters = $item->link->getRouteParameters(); // obtiene los parametetros enviados al route
    $generator = \Drupal::urlGenerator(); //permite crear urls desde drupal
    if($url->isRouted()){
      try {
        $path = '/'.$generator->getPathFromRoute($route, $parameters); //crea la url desde el route name si pertenece a drupal
      } catch (\Throwable $th) {
        $path = $th['message'];
      }
    }
    else{
      $path = $url->toString(); //devuelve la url si no pertenece a drupal
    }

    $image = NULL;
    $link_options = $item->link->getOptions();
    if ($link_options['menu_icon']['fid']){
      $fid = $link_options['menu_icon']['fid'];
      $file = File::load($fid);
      $image = file_create_url($file->getFileUri());
    }
    //$menu_item['uuid'] = $item->link->getPluginId();
    $menu_item['title'] = $item->link->getTitle();
    $menu_item['description'] = $item->link->getDescription();
    $menu_item['uri'] = $path;
    $menu_item['image'] = $image;
    $menu_item['depth'] = $item->depth;
    $menu_item['parameters'] = $parameters;
    $menu_item['external'] = $url->isExternal();

    return $menu_item;
  }

}
