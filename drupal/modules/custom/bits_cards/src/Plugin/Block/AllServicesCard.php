<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'AllServicesCard' block.
 *
 * @Block(
 *  id = "all_services_card",
 *  admin_label = @Translation("All Services card"),
 * )
 */
class AllServicesCard extends CardBase
{
  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'entity' => [
        'name' => 'node',
        'type' => 'products_services',
        'conditions' => [
          'field_type' => '12', // ID service taxonomy term
        ],
        'limit' => 6,
        'offset' => 0,
      ],
      'others' => [],
    ];
  }

}
