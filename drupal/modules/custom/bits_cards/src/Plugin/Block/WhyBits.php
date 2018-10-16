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
          'link' => [
            'type' => 'url',
            'title' => $this->t('Link'),
            'service_field' => 'link',
            'show' => 1,
            'weight' => 1,
            'max_length' => 100,
          ],
        ],
      ],
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
