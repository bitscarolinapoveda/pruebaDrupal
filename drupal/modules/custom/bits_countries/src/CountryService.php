<?php

namespace Drupal\bits_countries;
use Drupal\Core\Entity\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * Class CountryService.
 */
class CountryService {

  /**
   * Drupal\Core\Entity\EntityManagerInterface definition.
   *
   * @var \Drupal\Core\Entity\EntityManagerInterface
   */
  protected $entityManager;
  /**
   * Constructs a new CountryService object.
   */
  public function __construct(EntityManagerInterface $entity_manager) {
    $this->entityManager = $entity_manager;
  }

  public function get($params) {
    $query = \Drupal::entityQuery('country_entity');
//      ->condition('type', 'country_entity');
//      ->condition('', 'country_entity');
//    $nodes = $node_storage->loadMultiple($nids);
    if(array_key_exists("name",$params)) {
      $query->condition("name","%".$params["name"]."%","LIKE")->execute();
    }
    $nids = $query->execute();
    $list = $this->entityManager->getStorage('country_entity')->loadMultiple($nids);
    $listArray = [];
    foreach ($list as $entity) {
      $listArray[] = ['iso_code' => $entity->getIsoCode(), 'label' => $entity->getLabelName()];
    }
    return $listArray;
  }
}
