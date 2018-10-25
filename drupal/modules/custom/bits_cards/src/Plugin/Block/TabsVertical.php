<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'TabsVertical' block.
 *
 * @Block(
 *  id = "tabs_vertical",
 *  admin_label = @Translation("Tabs Vertical"),
 * )
 */
class TabsVertical extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'header' => [
        'table_fields' => [
          'leftTitle' => [
            'type' => 'textfield',
            'title' => $this->t('Texto izquierdo'),
            'service_field' => 'title',
            'show' => 1,
            'weight' => 1,
            'max_length' => 500,
          ],
          'rightTitle' => [
            'type' => 'textfield',
            'title' => $this->t('Texto derecho'),
            'service_field' => 'title',
            'show' => 1,
            'weight' => 1,
            'max_length' => 500,
          ],
        ],
      ],
      'body' => [],
      'files' => [],
      'others' => [],
    ];
  }

}
