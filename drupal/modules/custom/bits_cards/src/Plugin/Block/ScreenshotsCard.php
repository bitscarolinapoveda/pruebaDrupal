<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'ScreenshotsCard' block.
 *
 * @Block(
 *  id = "screenshots_card",
 *  admin_label = @Translation("Screenshots Card"),
 * )
 */
class ScreenshotsCard extends CardBase {

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
          'internal_menu_title' => [
            'type' => 'textfield',
            'title' => $this->t('Título menú interno'),
            'service_field' => 'internal_menu_title',
            'show' => 1,
            'weight' => 1,
            'max_length' => 25,
          ],
        ],
      ],
      'body' => [],
      'files' => [],
      'entity' => [
        'name' => 'node',
        'type' => 'screenshots',
        'limit' => 5,
        'offset' => 0,
        'default_view_mode' => 'default',
      ],
      'others' => [],
    ];
  }

}
