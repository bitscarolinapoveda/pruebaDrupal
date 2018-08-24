<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'BrandCard' block.
 *
 * @Block(
 *  id = "brand_card",
 *  admin_label = @Translation("Brand card"),
 * )
 */
class BrandCard extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'header' => [
        'table_fields' => [
          'image' => [
            'type' => 'managed_file',
            'title' => $this->t('Imagen'),
            'service_field' => 'image',
            'show' => 1,
            'weight' => 1,
            'max_length' => 1,
          ],
        ],
      ],
      'body' => [
        'table_fields' => [
          'subTitle' => [
            'type' => 'textfield',
            'title' => $this->t('Subtítulo'),
            'service_field' => 'subtitle',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
        ],
      ],
      'others' => [],
    ];
    ksm('tst');

  }

}
