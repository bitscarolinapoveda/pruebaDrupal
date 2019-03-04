<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'ExpertsInImedicalCard' block.
 *
 * @Block(
 *  id = "experts_in_imedical_card",
 *  admin_label = @Translation("Experts in imedical card"),
 * )
 */
class ExpertsInImedicalCard extends CardBase {

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
          'sub_title' => [
            'type' => 'textfield',
            'title' => $this->t('Sub - Título'),
            'service_field' => 'sub_title',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
        ],
      ],
      'body' => [],
      'entity' => [
        'name' => 'node',
        'type' => 'imedical_expertsin',
        'limit' => 5,
        'offset' => 0,
      ],
      'others' => [],
    ];
  }

}
