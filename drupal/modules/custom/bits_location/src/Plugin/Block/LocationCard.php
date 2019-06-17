<?php

namespace Drupal\bits_location\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'LocationCard' block.
 *
 * @Block(
 *  id = "location_card",
 *  admin_label = @Translation("Location card"),
 * )
 */
class LocationCard extends CardBase {

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
          'subtitle' => [
            'type' => 'textfield',
            'title' => $this->t('Subtítulo'),
            'service_field' => 'subtitle',
            'show' => 1,
            'weight' => 1,
          ],
          'seemore' => [
            'type' => 'textfield',
            'title' => $this->t('Texto Ver mas'),
            'service_field' => 'seemore',
            'show' => 1,
            'weight' => 1,
          ],
          'seeless' => [
            'type' => 'textfield',
            'title' => $this->t('Texto Ver menos'),
            'service_field' => 'seeless',
            'show' => 1,
            'weight' => 1,
          ],
        ],
      ],
      'body' => [],
      'entity' => [
        'name' => 'node',
        'type' => 'locations',
        'limit' => 6,
        'offset' => 0,
      ],
      'others' => [],
    ];
  }

}
