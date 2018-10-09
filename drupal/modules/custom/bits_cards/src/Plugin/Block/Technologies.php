<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'Technologies' block.
 *
 * @Block(
 *  id = "technologies",
 *  admin_label = @Translation("Technologies"),
 * )
 */
class Technologies extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'header' => [],
      'body' => [
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
