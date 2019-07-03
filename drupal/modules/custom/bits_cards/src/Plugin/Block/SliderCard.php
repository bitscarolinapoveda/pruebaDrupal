<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'SliderCard' block.
 *
 * @Block(
 *  id = "slider_card",
 *  admin_label = @Translation("Slider card"),
 * )
 */
class SliderCard extends CardBase {

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
          'anchor_explore' => [
            'type' => 'textfield',
            'title' => $this->t('Anchor explore'),
            'service_field' => 'anchor_explore',
            'show' => 1,
            'weight' => 1,
          ],
          'transition' => [
            'type' => 'textfield',
            'title' => $this->t('Transition'),
            'service_field' => 'transition',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
        ],
      ],
      'entity' => [
        'name' => 'node',
        'type' => 'slider',
        'limit' => 20,
        'offset' => 0,
        'default_view_mode' => 'slide',
      ],
      'others' => [],
    ];
  }

}
