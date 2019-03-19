<?php

namespace Drupal\bits_countries;
use Drupal\Core\Entity\EntityTypeManagerInterface;
/**
 * Class CountryService.
 */
class CountryService {

  /**
   * Drupal\Core\Entity\EntityTypeManagerInterface definition.
   *
   * @var \Drupal\Core\Entity\EntityTypeManagerInterface
   */
  protected $entityTypeManager;
  /**
   * Constructs a new CountryService object.
   */
  public function __construct(EntityTypeManagerInterface $entity_manager) {
    $this->entityTypeManager = $entity_manager;
  }

  /**
   * @param $params
   *
   * @return array
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function get($params) {
    $storage = $this->entityTypeManager->getStorage('country_entity');
    $query = $storage->getQuery('AND');
    if(array_key_exists("name",$params)) {
      $query->condition("name","%".$params["name"]."%","LIKE")->execute();
    }
    $nids = $query->execute();
    $list = $storage->loadMultiple($nids);
    $listArray = [];

    foreach ($list as  $entity) {
      /* @var $entity \Drupal\bits_countries\Entity\CountryEntity */
      $listArray[] = ['iso_code' => $entity->getIsoCode(), 'label' => $entity->getLabelName()];
    }
    return $listArray;
  }
}
