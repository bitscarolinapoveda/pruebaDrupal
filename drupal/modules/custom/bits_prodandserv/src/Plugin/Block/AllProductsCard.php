<?php

namespace Drupal\bits_prodandserv\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'AllProductsCard' block.
 *
 * @Block(
 *  id = "all_products_card",
 *  admin_label = @Translation("All products card"),
 * )
 */
class AllProductsCard extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'entity' => [
        'name' => 'service_product_bits',
        'type' => '',
        'conditions' => [
          'type' => 'product',
        ],
        'limit' => 1000,
      ],
      'others' => [],
    ];
  }

}
