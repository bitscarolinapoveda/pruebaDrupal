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
      'body' => [
        'table_fields' => [
          'link_services' => [
            'type' => 'url',
            'title' => $this->t('Btn servicios'),
            'input' => ['label' =>$this->t('Ver servicios')],
            'service_field' => 'link_services',
            'show' => 1,
            'weight' => 1,
            'max_length' => 100,
            "attributes" => [
              'onchange' => "var a = document.createElement('a'); a.setAttribute('href', this.value); this.value = a.href;"
            ],
          ],
          'link_products' => [
            'type' => 'url',
            'title' => $this->t('Btn productos'),
            'input' => ['label' => $this->t('Ver productos')],
            'service_field' => 'link_products',
            'show' => 1,
            'weight' => 1,
            'max_length' => 100,
          ],
        ]
      ],
      'files' => [],
      'entity' => [
        'name' => 'node',
        'type' => 'products_services',
        'limit' => 6,
        'offset' => 0,
      ],
      'others' => [],
    ];
  }

}
