<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'WhyBits' block.
 *
 * @Block(
 *  id = "why_bits",
 *  admin_label = @Translation("Why Bits"),
 * )
 */
class WhyBits extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'header' => [],
      'body' => [],
      "archivos" => [
        'table_fields' => [
          'image' => [
            'type' => 'managed_file',
            'title' => $this->t('Imagen'),
            'service_field' => 'image',
            'show' => 1,
            'weight' => 1,
            'max_length' => 5,
            'multiple' => TRUE,
          ],
        ],
      ],
      'others' => [],
    ];
  }

}
