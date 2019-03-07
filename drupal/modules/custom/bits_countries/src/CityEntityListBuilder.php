<?php

namespace Drupal\bits_countries;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityListBuilder;
use Drupal\Core\Link;

/**
 * Defines a class to build a listing of City entity entities.
 *
 * @ingroup bits_countries
 */
class CityEntityListBuilder extends EntityListBuilder {


  /**
   * {@inheritdoc}
   */
  public function buildHeader() {
    $header['id'] = $this->t('City entity ID');
    $header['label_name'] = $this->t('Label name');
    $header['name'] = $this->t('Name');
    $header['country_code'] = $this->t('Country code');
    return $header + parent::buildHeader();
  }

  /**
   * {@inheritdoc}
   */
  public function buildRow(EntityInterface $entity) {
    /* @var $entity \Drupal\bits_countries\Entity\CityEntity */
    $row['id'] = $entity->id();
    $row['label_name'] = $entity->getLabelName();
    $row['name'] = Link::createFromRoute(
      $entity->label(),
      'entity.city_entity.edit_form',
      ['city_entity' => $entity->id()]
    );
    $row['country_code'] = $entity->getCountryCode();
    return $row + parent::buildRow($entity);
  }

}
