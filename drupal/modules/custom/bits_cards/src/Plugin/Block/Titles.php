<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'Titles' block.
 *
 * @Block(
 *  id = "titles",
 *  admin_label = @Translation("Titles"),
 * )
 */
class Titles extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'header' => [
        'table_fields' => [
          'title' => [
            'type' => 'textfield',
            'title' => $this->t('Título Páginas'),
            'service_field' => 'title',
            'show' => 1,
            'weight' => 1,
            'max_length' => 500,
          ],
        ],
      ],
      'body' => [],
      'archivos' => [],
      'others' => [],
    ];
  }

}
