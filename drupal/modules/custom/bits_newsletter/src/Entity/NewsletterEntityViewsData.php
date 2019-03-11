<?php

namespace Drupal\bits_newsletter\Entity;

use Drupal\views\EntityViewsData;

/**
 * Provides Views data for Newsletter entity entities.
 */
class NewsletterEntityViewsData extends EntityViewsData {

  /**
   * {@inheritdoc}
   */
  public function getViewsData() {
    $data = parent::getViewsData();

    // Additional information for Views integration, such as table joins, can be
    // put here.

    return $data;
  }

}
