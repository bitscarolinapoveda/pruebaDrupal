<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'AchievementsBitsAmericasCard' block.
 *
 * @Block(
 *  id = "pqrs_bits_americas",
 *  admin_label = @Translation("PQRS Bits Americas"),
 * )
 */
class PqrsCard extends CardBase {

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
            'max_length' => 50,
          ],
          'sub_title' => [
            'type' => 'textfield',
            'title' => $this->t('Sub Título Páginas'),
            'service_field' => 'sub_title',
            'show' => 1,
            'weight' => 1,
            'max_length' => 300,
          ],
        ],
      ],
      'body' => [],
      'files' => [],
      'others' => [],
    ];
  }

}
