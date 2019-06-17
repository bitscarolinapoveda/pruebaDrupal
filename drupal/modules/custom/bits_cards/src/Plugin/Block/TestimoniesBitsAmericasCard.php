<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'TestimoniesBitsAmericasCard' block.
 *
 * @Block(
 *  id = "testimonies_bits_americas",
 *  admin_label = @Translation("Testimonies Bits Americas"),
 * )
 */
class TestimoniesBitsAmericasCard extends CardBase {

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
        'type' => 'lo_que_dice_el_cliente',
        'limit' => 5,
        'offset' => 0,
        'default_view_mode' => 'slide',
      ],
      'others' => [],
    ];
  }

}
