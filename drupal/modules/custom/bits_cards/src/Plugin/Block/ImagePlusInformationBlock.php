<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'ImagePlusInformationBlock' block.
 *
 * @Block(
 *  id = "image_plus_information",
 *  admin_label = @Translation("Image plus information"),
 * )
 */
class ImagePlusInformationBlock extends CardBase {

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
        'type' => 'image_plus_information',
        'limit' => 6,
        'offset' => 0,
      ],
    ];
  }

}
