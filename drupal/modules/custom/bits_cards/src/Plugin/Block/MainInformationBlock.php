<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'MainInformationBlock' block.
 *
 * @Block(
 *  id = "main_infomation",
 *  admin_label = @Translation("Main information"),
 * )
 */
class MainInformationBlock extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'header' => [
        'table_fields' => [
          'title' => [
            'type' => 'textfield',
            'title' => $this->t('Proyecto'),
            'service_field' => 'title',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'description' => [
            'type' => 'textfield',
            'title' => $this->t('Cliente'),
            'service_field' => 'description',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
        ],
      ],
      'body' => [
        'table_fields' => [],
      ],
      'others' => [
        'name' => 'node',
        'type' => 'main_information',
        'limit' => 6,
        'offset' => 0,
      ],
    ];
  }

}
