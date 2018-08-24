<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'OurAliance' block.
 *
 * @Block(
 *  id = "our_aliance",
 *  admin_label = @Translation("Our Aliance"),
 * )
 */
class OurAliance extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'header' => [
        'table_fields' => [
          'title' => [
            'type' => 'textfield',
            'title' => $this->t('Titulo'),
            'service_field' => 'title',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
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
              'max_length' => 1,
            ],
        ],
      ],
      'others' => [
      ],
    ];
  }
}