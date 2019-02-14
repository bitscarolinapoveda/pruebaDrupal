<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'AchievementsCard' block.
 *
 * @Block(
 *  id = "achievements_card",
 *  admin_label = @Translation("Achievements card"),
 * )
 */
class AchievementsCard extends CardBase
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
      'body' => [],
      'entity' => [
        'name' => 'node',
        'type' => 'achievements',
        'limit' => 5,
        'offset' => 0,
      ],
      'others' => [],
    ];
  }

}
