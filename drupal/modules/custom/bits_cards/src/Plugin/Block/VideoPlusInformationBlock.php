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
        'table_fields' => [],
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
