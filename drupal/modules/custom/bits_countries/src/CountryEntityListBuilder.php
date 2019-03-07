<?php

namespace Drupal\bits_countries;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityListBuilder;
use Drupal\Core\Link;

/**
 * Defines a class to build a listing of Country entity entities.
 *
 * @ingroup bits_countries
 */
class CountryEntityListBuilder extends EntityListBuilder {


  /**
   * {@inheritdoc}
   */
  public function buildHeader() {
    $header['id'] = $this->t('Country entity ID');
    $header['name'] = $this->t('Name');
    $header['iso_code'] = $this->t('ISO code');
    $header['label_name'] = $this->t('Label name');
    return $header + parent::buildHeader();
  }

  /**
   * {@inheritdoc}
   */
  public function buildRow(EntityInterface $entity) {
    /* @var $entity \Drupal\bits_countries\Entity\CountryEntity */
    $row['id'] = $entity->id();
    $row['name'] = Link::createFromRoute(
      $entity->label(),
      'entity.country_entity.edit_form',
      ['country_entity' => $entity->id()]
    );
    $row['iso_code'] = $entity->getIsoCode();
    $row['label_name'] = $entity->getLabelName();

    return $row + parent::buildRow($entity);
  }

}
