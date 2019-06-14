<?php

namespace Drupal\adf_content_types\Services;
use Drupal\Core\Entity\EntityRepositoryInterface;
use Drupal\image\Entity\ImageStyle;
use Drupal\responsive_image\Entity\ResponsiveImageStyle;
use Drupal\rest\ResourceResponse;
use Drupal\Core\Cache\CacheableMetadata;

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
    $language = \Drupal::languageManager()->getCurrentLanguage()->getId();
    $queryFields = \Drupal::entityTypeManager() // se cambia entityManager por entityTypeManager esta depreciado
    ->getStorage('entity_view_display')
    ->load( 'node.page.default');

    $fields = [];
    if ($queryFields) {
      $fields = $queryFields->getComponents();
    }
    if($language != 'es'){
      if ($node->hasTranslation($language)) {
        $node = $node->getTranslation($language);
      }
    }
    $resp = [];
    $resp['title'] = $node->getTitle();
    $resp['body'] = $node->get('body')->value;
    $resp['url'] = \Drupal::service('path.alias_manager')->getAliasByPath('/node/'.$node->id());
    $languages = \Drupal::languageManager()->getLanguages();
    foreach ($languages as $key => $value) {
      $otherURL = \Drupal::service('path.alias_manager')->getAliasByPath('/node/'.$node->id(), $key);
      $otherURL = (strpos($otherURL, 'node') === false) ? $otherURL : '';
      if ($key != 'es') {
        $otherURL = '/' . $key . $otherURL;
      }
      $resp['others_urls'][$key] = $otherURL;
    }


    if ($node->hasField('field_meta_tags')) {
      $metatags = $node->get('field_meta_tags')->value;
      $resp['metatags'] = unserialize($metatags);
    }

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
    //$resp['datetime'] = date('U');
    //$resp['language'] = $language;
    $resource = new ResourceResponse($resp);
    $resource->addCacheableDependency(CacheableMetadata::createFromRenderArray(
      [
        '#cache' => [
          'contexts' => ['languages:language_content'],
          'tags' => ['node:'.$node->id()],
        ],
      ]
    ));
    return $resource;
  }
}
