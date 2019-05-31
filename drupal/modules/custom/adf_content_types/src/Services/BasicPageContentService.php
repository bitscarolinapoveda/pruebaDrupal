<?php

namespace Drupal\adf_content_types\Services;
use Drupal\Core\Entity\EntityRepositoryInterface;
use Drupal\image\Entity\ImageStyle;
use Drupal\responsive_image\Entity\ResponsiveImageStyle;

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
    $queryFields = \Drupal::entityTypeManager() // se cambia entityManager por entityTypeManager esta depreciado
    ->getStorage('entity_view_display')
    ->load( 'node.page.default');

    $fields = [];
    if ($queryFields) {
      $fields = $queryFields->getComponents();
    }

    $resp = [];
    $resp['title'] = $node->getTitle();
    $resp['body'] = $node->get('body')->value;
    $metatags = $node->get('field_meta_tags')->value;
    $resp['metatags'] = unserialize($metatags);
    $entity_img = $node->field_ps_large_image->entity;

    //add responsive images and image styles
    if ($entity_img) {
      if (!empty($fields['field_ps_large_image']['settings']['image_style'])) {
        $style_image = $fields['field_ps_large_image']['settings']['image_style']; //trae el estilo de imagen asociado
        $resp['field_image'] = [
          'url' => ImageStyle::load($style_image)->buildUrl($entity_img->getFileUri()), // crea la url con el estilo de imagen asociado
          'alt' => $imageData[$key]['alt'],
        ];
      }
      elseif (!empty($fields['field_ps_large_image']['settings']['responsive_image_style'])) {
        $responsive_image = ResponsiveImageStyle::load($fields['field_ps_large_image']['settings']['responsive_image_style']);
        $styles_image = $responsive_image->get('image_style_mappings')[0]['image_mapping']['sizes_image_styles'];
        foreach ($styles_image as $key2 => $value) {
          $resp['field_image'][$value] = [
            'url' => ImageStyle::load($value)->buildUrl($entity_img->getFileUri()), // crea la url con el estilo de imagen asociado
            'alt' =>$node->field_ps_large_image->alt,
          ];
        }
      }
      else {
        $resp['field_image'] = [
          'url' => file_create_url($entity_img->getFileUri()),
          'alt' => $node->field_ps_large_image->alt,
        ];
      }
    }
    return $resp;
  }
}
