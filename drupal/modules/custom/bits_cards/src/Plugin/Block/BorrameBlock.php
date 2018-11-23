<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'BorrameBlock' block.
 *
 * @Block(
 *  id = "borrame_block",
 *  admin_label = @Translation("Borrame block"),
 * )
 */
class BorrameBlock extends CardBase
{

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'header' => [
        'table_fields' => [
        ],
      ],
      'body' => [
        'table_fields' => [],
      ],
      'entity' => [
        'name' => 'node',
        'type' => 'article',
      ],
      'others' => [],
    ];
  }

}
