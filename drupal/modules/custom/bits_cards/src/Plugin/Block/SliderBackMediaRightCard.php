<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'SliderBackMediaRightCard' block.
 *
 * @Block(
 *  id = "sliderbackmediaright_card",
 *  admin_label = @Translation("SliderBackMediaRight card"),
 * )
 */
class SliderBackMediaRightCard extends CardBase {

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
      'entity' => [
        'name' => 'node',
        'type' => 'sliderback_media_right',
        'limit' => 20,
        'offset' => 0,
        'default_view_mode' => 'slide',
      ],
      'others' => [],
    ];
  }

}
