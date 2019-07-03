<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'WhyBits' block.
 *
 * @Block(
 *  id = "why_bits",
 *  admin_label = @Translation("Why Bits"),
 * )
 */
class WhyBits extends CardBase {

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
      'body' => [],
      'files' => [
        'table_fields' => [
          'image' => [ //Soporta varios pero no permite administrar el contenido para cada ítem, se recurre a entidades...
            'type' => 'managed_file',
            'title' => $this->t('Imagen'),
            'service_field' => 'image',
            'show' => 1,
            'weight' => 1,
            'max_length' => 5,
            'multiple' => TRUE,
          ],
        ],
      ],
      'entity' => [
        'name' => 'node',
        'type' => 'por_que_bits',
        'limit' => 6,
        'offset' => 0,
        'default_view_mode' => 'slide',
      ],
      'others' => [],
    ];
  }

}
