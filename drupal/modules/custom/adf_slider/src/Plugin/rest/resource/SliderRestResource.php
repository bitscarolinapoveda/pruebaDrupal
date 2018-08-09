<?php

namespace Drupal\adf_slider\Plugin\rest\resource;

use Drupal\rest\Plugin\ResourceBase;
use \Drupal\rest\ResourceResponse;
use Drupal\Core\Entity\EntityManagerInterface;
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
 *   id = "adf_slider",
 *   label = @Translation("adf_slider"),
 *   uri_paths = {
 *     "canonical" = "adf_slider/{article}"
 *   }
 * )
 */


class SliderRestResource extends ResourceBase {

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
    public function __construct(
        array $configuration,
        $plugin_id,
        $plugin_definition,
        array $serializer_formats,
        LoggerInterface $logger,
        EntityManagerInterface $entity_manager,
        AccountProxyInterface $current_user
    ) {
        parent::__construct($configuration, $plugin_id, $plugin_definition, $serializer_formats, $logger);

        $this->entityManager = $entity_manager;
        $this->currentUser = $current_user;
    }

    /**
     * {@inheritdoc}
     */
    public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition)
    {
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


    /**
     * Responds to entity GET requests.
     * @return \Drupal\rest\ResourceResponse
     */

    public function get()
    {
        $response = ['message' => 'Hello, this is a rest service'];
        return new ResourceResponse($response);
    }
}