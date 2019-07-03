<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'OurWorkBitsAmericasCard' block.
 *
 * @Block(
 *  id = "our_work_bits_americas",
 *  admin_label = @Translation("Our Work Bits Americas"),
 * )
 */
class OurWorkBitsAmericasCard extends CardBase {

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
        'type' => 'nuestro_trabajo',
        'limit' => 3,
        'offset' => 0,
        'default_view_mode' => 'default',
      ],
      'others' => [],
    ];
  }

}
