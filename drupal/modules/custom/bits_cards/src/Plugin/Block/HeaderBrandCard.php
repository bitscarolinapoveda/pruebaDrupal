<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'HeaderBrandCard' block.
 *
 * @Block(
 *  id = "header_brand_card",
 *  admin_label = @Translation("Header Brand card"),
 * )
 */
class HeaderBrandCard extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'header' => [
        'table_fields' => [
          'white_logo' => [
            'type' => 'managed_file',
            'title' => $this->t('White logo'),
            'service_field' => 'image',
            'show' => 1,
            'weight' => 1,
            'max_length' => 1,
          ],
          'color_logo' => [
            'type' => 'managed_file',
            'title' => $this->t('Color logo'),
            'service_field' => 'image',
            'show' => 1,
            'weight' => 1,
            'max_length' => 1,
          ],
          'link' => [
            'type' => 'url',
            'title' => $this->t('Link logo'),
            'service_field' => 'link',
            'show' => 1,
            'weight' => 1,
            'max_length' => 100,
          ],
        ],
      ],
      'others' => [],
    ];
  }

}
