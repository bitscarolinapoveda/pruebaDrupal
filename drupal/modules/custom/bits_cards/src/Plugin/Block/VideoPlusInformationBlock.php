<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'VideoPlusInformationBlock' block.
 *
 * @Block(
 *  id = "video_plus_information",
 *  admin_label = @Translation("Video plus information"),
 * )
 */
class VideoPlusInformationBlock extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'header' => [
        'table_fields' => [
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
      'body' => [
        'table_fields' => [],
      ],
      'others' => [],
      'entity' => [
        'name' => 'node',
        'type' => 'video_plus_information',
        'limit' => 6,
        'offset' => 0,
      ],
    ];
  }

}
