<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'OurAlliance' block.
 *
 * @Block(
 *  id = "our_alliance",
 *  admin_label = @Translation("Our Alliance"),
 * )
 */
class OurAlliance extends CardBase {

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
          'link' => [
            'type' => 'url',
            'title' => $this->t('Link'),
            'service_field' => 'link',
            'show' => 1,
            'weight' => 1,
            'max_length' => 100,
          ],
       ],
      ],
      'body' => [
        'table_fields' => [
          'image' => [
            'type' => 'managed_file',
            'title' => $this->t('Imagen'),
            'service_field' => 'image',
            'show' => 1,
            'weight' => 1,
            'max_length' => 5,
          ],
        ],
      ],
      'files' => [
        'table_fields' => [
          'image' => [
            'type' => 'managed_file',
            'title' => $this->t('Imagen'),
            'service_field' => 'image',
            'show' => 1,
            'weight' => 1,
            'max_length' => 5,
          ],
        ],
      ],
      'entity' => [
        'name' => 'node',
        'type' => 'alliances',
        'limit' => 6,
        'offset' => 0,
        'default_view_mode' => 'slide',
      ],
      'others' => [],
    ];
  }

}
