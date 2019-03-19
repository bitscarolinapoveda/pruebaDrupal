<?php

namespace Drupal\bits_countries;
use Drupal\Core\Entity\EntityManagerInterface;
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

  /**
   * @param $params
   *
   * @return array
   * @throws \Drupal\Component\Plugin\Exception\InvalidPluginDefinitionException
   * @throws \Drupal\Component\Plugin\Exception\PluginNotFoundException
   */
  public function get($params) {
    $query = \Drupal::entityQuery('country_entity');
    if(array_key_exists("name",$params)) {
      $query->condition("name","%".$params["name"]."%","LIKE")->execute();
    }
    $nids = $query->execute();
    $list = $this->entityManager->getStorage('country_entity')->loadMultiple($nids);
    $listArray = [];

    foreach ($list as  $entity) {
      /* @var $entity \Drupal\bits_countries\Entity\CountryEntity */
      $listArray[] = ['iso_code' => $entity->getIsoCode(), 'label' => $entity->getLabelName()];
    }
    return $listArray;
  }
}
