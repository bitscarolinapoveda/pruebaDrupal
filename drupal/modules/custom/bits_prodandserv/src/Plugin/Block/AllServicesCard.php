<?php

namespace Drupal\bits_prodandserv\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'AllServicesCard' block.
 *
 * @Block(
 *  id = "all_services_card",
 *  admin_label = @Translation("All services card"),
 * )
 */
class AllServicesCard extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'entity' => [
        'name' => 'service_product_bits',
        'type' => '', //necesario para no generar error bundleEntityTypes
        'conditions' => [
          'type' => 'service',
        ],
        'limit' => 1000,
      ],
      'others' => [],
    ];
  }
}
