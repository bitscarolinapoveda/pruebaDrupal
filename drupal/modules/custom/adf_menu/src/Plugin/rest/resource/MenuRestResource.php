<?php

namespace Drupal\adf_menu\Plugin\rest\resource;

use Drupal\Core\Entity\EntityManagerInterface;
use Drupal\rest\Plugin\ResourceBase;
use Drupal\rest\ResourceResponse;
use Drupal\Core\Menu\MenuTreeParameters;
use Drupal\Core\Url;
use \Symfony\Component\Routing\Route; 
use Drupal\Core\Session\AccountProxyInterface;
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
   * @param \Drupal\Core\Entity\EntityManagerInterface $entity_manager
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
   * @var \Drupal\Core\Entity\EntityManagerInterface
   */
  protected $entityManager;

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
                              EntityManagerInterface $entity_manager,
                              AccountProxyInterface $current_user) {
    parent::__construct($configuration, $plugin_id, $plugin_definition, $serializer_formats, $logger);

    $this->entityManager = $entity_manager;
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
      $container->get('entity.manager'),
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

      $menu = $menu_tree_detail->build($tree);

      $adf_menuSettings = \Drupal::config('adf_menu.adf_adf_menuSettings')->get('select_parameters');

      $adf_menuSettings = $adf_menuSettings ? $adf_menuSettings : [];

      $this->menuTreeDetails($adf_menuSettings, $menu['#items'], $this->menuDetails);

      $response = new ResourceResponse(array_values($this->menuDetails));
      $response->addCacheableDependency($this->menuDetails);

      return $response;
    }
   
    throw new HttpException(t("Menu name is required parameter"));
  }

  /**
   * Generate the menu tree we can use in JSON.
   *
   * @param array $adf_menuSettings
   *   Menu COnfiguration as per required parameter in response.
   * @param array $transformed_tree
   *   The menu tree.
   * @param array $menu_tree
   *   The already created items.
   */
  protected function menuTreeDetails(array $adf_menuSettings, array $transformed_tree, array &$menu_tree = []) {
    $order = 0;
    foreach ($transformed_tree as $menu_item) {
      $menu_link = $menu_item['original_link'];
      $url = $menu_item['url'];
      
      $external = FALSE;
      $uuid = '';
      if ($url->isExternal()) {
        $uri = $url->getUri();
        $external = TRUE;
        $absolute = $uri;
      }
      else {
        try {
          $uri = $url->getInternalPath();
          $absolute = Url::fromUri('internal:/' . $uri, ['absolute' => TRUE])
            ->toString(TRUE)
            ->getGeneratedUrl();

          $params = Url::fromUri('internal:/' . $uri)->getRouteParameters();
          $entity_type = key($params);
          if (!empty($entity_type)) {
            $entity = \Drupal::entityTypeManager()
              ->getStorage($entity_type)
              ->load($params[$entity_type]);
            $uuid = $entity->uuid();
          }
        }
        catch (\UnexpectedValueException $e) {
          $absolute = $uri = '';
        }
      }

      $menu_tree[$order]['title'] = $menu_link->getTitle();
      $menu_tree[$order]['uri'] = $uri;
      $menu_tree[$order]['image'] = $http;
      if (isset($adf_menuSettings['alias']) && $adf_menuSettings['alias']) {
        $menu_tree[$order]['alias'] = ltrim($alias, '/');
      }
      if (isset($adf_menuSettings['external']) && $adf_menuSettings['external']) {
        $menu_tree[$order]['external'] = $external;
      }
      if (isset($adf_menuSettings['absolute_url']) && $adf_menuSettings['absolute_url']) {
        $menu_tree[$order]['absolute'] = $absolute;
      }
      if (isset($adf_menuSettings['weight']) && $adf_menuSettings['weight']) {
        $menu_tree[$order]['weight'] = $menu_link->getWeight();
      }
      if (isset($adf_menuSettings['expanded']) && $adf_menuSettings['expanded']) {
        $menu_tree[$order]['expanded'] = $menu_link->isExpanded();
      }
      if (isset($adf_menuSettings['enabled']) && $adf_menuSettings['enabled']) {
        $menu_tree[$order]['enabled'] = $menu_link->isEnabled();
      }
      if (isset($adf_menuSettings['uuid']) && $adf_menuSettings['uuid']) {
        $menu_tree[$order]['uuid'] = $uuid;
      }

      if (!empty($menu_item['below'])) {
        $menu_tree[$order]['below'] = [];
        $this->menuTreeDetails($adf_menuSettings, $menu_item['below'], $menu_tree[$order]['below']);
      }
      $order++;
    }
  }

}
