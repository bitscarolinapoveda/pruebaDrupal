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
    $url_img = "";
    $alt_img = "";
    $entity_img = $node->field_ps_large_image->entity;
    if($entity_img){
       $url_img = file_create_url($node->field_ps_large_image->entity->getFileUri());
      $alt_img = $node->field_ps_large_image->alt;
    }
    $resp['field_image']['url'] = $url_img;
    $resp['field_image']['alt'] = $alt_img;
    return $resp;
  }

}
