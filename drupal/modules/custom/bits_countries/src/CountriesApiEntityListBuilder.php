<?php

namespace Drupal\bits_countries;

use Drupal\Core\Config\Entity\ConfigEntityListBuilder;
use Drupal\Core\Entity\EntityInterface;

/**
 * Provides a listing of Countries api entity entities.
 */
class CountriesApiEntityListBuilder extends ConfigEntityListBuilder {

  /**
   * {@inheritdoc}
   */
  public function buildHeader() {
    $header['label'] = $this->t('Countries entity');
    $header['id'] = $this->t('Machine name');
    $header['url'] = $this->t('Url');
    return $header + parent::buildHeader();
  }

  /**
   * {@inheritdoc}
   */
  public function buildRow(EntityInterface $entity) {
    $row['label'] = $entity->label();
    $row['id'] = $entity->id();
    $row['url'] = $entity->get('url');
    // You probably want a few more properties here...
    return $row + parent::buildRow($entity);
  }
}
