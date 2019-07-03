<?php

namespace Drupal\bits_prodandserv\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'AllProductsAndServicesCard' block.
 *
 * @Block(
 *  id = "all_product_services_card",
 *  admin_label = @Translation("All products and services card"),
 * )
 */
class AllProductsAndServicesCard extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'entity' => [
        'name' => 'service_product_bits',
        'type' => '',
        'limit' => 1000,
      ],
      'others' => [],
    ];
  }

}
