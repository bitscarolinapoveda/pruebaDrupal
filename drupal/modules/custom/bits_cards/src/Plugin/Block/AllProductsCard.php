<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'AllProductsCard' block.
 *
 * @Block(
 *  id = "all_products_card",
 *  admin_label = @Translation("All Products card"),
 * )
 */
class AllProductsCard extends CardBase
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
          'field_type' => '11', // ID product taxonomy term
        ],
        'limit' => 6,
        'offset' => 0,
      ],
      'others' => [],
    ];
  }

}
