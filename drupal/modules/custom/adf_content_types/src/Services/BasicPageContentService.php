<?php

namespace Drupal\adf_content_types\Services;
use Drupal\Core\Entity\EntityRepositoryInterface;

/**
 * Class BasicPageContentService.
 */
class BasicPageContentService {

  /**
   * Drupal\Core\Entity\EntityRepositoryInterface definition.
   *
   * @var \Drupal\Core\Entity\EntityRepositoryInterface
   */
  protected $entityRepository;
  /**
   * Constructs a new BasicPageContentService object.
   */
  public function __construct(EntityRepositoryInterface $entity_repository) {
    $this->entityRepository = $entity_repository;
  }

  public function get($uuid) {
    if (is_null($node = $this->entityRepository->loadEntityByUuid('node', $uuid))) {
      return [];
    }

    $resp = [];
    $resp['title'] = $node->getTitle();
    $resp['body'] = $node->get('body')->value;

    return $resp;
  }

}
