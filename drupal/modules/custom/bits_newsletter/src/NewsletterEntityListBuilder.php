<?php

namespace Drupal\bits_newsletter;

use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Entity\EntityListBuilder;
use Drupal\Core\Link;

/**
 * Defines a class to build a listing of Newsletter entity entities.
 *
 * @ingroup bits_newsletter
 */
class NewsletterEntityListBuilder extends EntityListBuilder {


  /**
   * {@inheritdoc}
   */
  public function buildHeader() {
    $header['id'] = $this->t('Newsletter entity ID');
    $header['name'] = $this->t('Name');
    $header['last_name'] = $this->t('Last name');
    return $header + parent::buildHeader();
  }

  /**
   * {@inheritdoc}
   */
  public function buildRow(EntityInterface $entity) {
    /* @var $entity \Drupal\bits_newsletter\Entity\NewsletterEntity */
    $row['id'] = $entity->id();
    $row['name'] = Link::createFromRoute(
      $entity->label(),
      'entity.newsletter_entity.edit_form',
      ['newsletter_entity' => $entity->id()]
    );
    $row['last_name'] = $entity->getLastName();
    $row['email'] = $entity->getEmail();
    return $row + parent::buildRow($entity);
  }

}
