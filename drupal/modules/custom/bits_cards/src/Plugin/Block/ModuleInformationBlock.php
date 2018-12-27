<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'ModuleInformationBlock' block.
 *
 * @Block(
 *  id = "module_information",
 *  admin_label = @Translation("Module information"),
 * )
 */
class ModuleInformationBlock extends CardBase {

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
          'description' => [
            'type' => 'textfield',
            'title' => $this->t('Descripción'),
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
      'others' => [],
      'entity' => [
        'name' => 'node',
        'type' => 'module_information',
        'limit' => 6,
        'offset' => 0,
      ],
    ];
  }

}
