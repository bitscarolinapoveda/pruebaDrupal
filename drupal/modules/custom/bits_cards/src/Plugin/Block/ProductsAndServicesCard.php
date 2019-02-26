<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'ProductsAndServicesCard' block.
 *
 * @Block(
 *  id = "product_services_card",
 *  admin_label = @Translation("Products and services card"),
 * )
 */
class ProductsAndServicesCard extends CardBase
{
  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'header' => [
        'table_fields' => [
          'title' => [
            'type' => 'textfield',
            'title' => $this->t('Título'),
            'service_field' => 'title',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
        ],
      ],
      'body' => [],
      'files' => [],
      'entity' => [
        'name' => 'service_product_bits',
        'limit' => 6,
        'offset' => 0,
      ],
      'others' => [],
    ];
  }

}
