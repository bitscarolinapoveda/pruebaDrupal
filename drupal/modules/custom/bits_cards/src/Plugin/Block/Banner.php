<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'Banner' block.
 *
 * @Block(
 *  id = "banner",
 *  admin_label = @Translation("Banner"),
 * )
 */
class Banner extends CardBase {

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
            'max_length' => 5,
          ],
        ],
      ],
      'body' => [],
      "archivos" => [],
      'others' => [],
    ];
  }

}
