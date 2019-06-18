<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'WorkWithUs' block.
 *
 * @Block(
 *  id = "work_with_us",
 *  admin_label = @Translation("Work With Us"),
 * )
 */
class WorkWithUs extends CardBase {

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
            'max_length' => 500,
          ],
          'subTitle' => [
            'type' => 'textfield',
            'title' => $this->t('Subtítulo'),
            'service_field' => 'subtitle',
            'show' => 1,
            'weight' => 1,
            'max_length' => 500,
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
      'body' => [
        'table_fields' => [
          'address' => [
            'type' => 'url',
            'title' => $this->t('Dirección'),
            'service_field' => 'address',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'content' => [
            'type' => 'textfield',
            '#title' => $this->t('Text'),
            'title' => $this->t('Texto del boton'),
            'service_field' => 'title bottom',
            'show' => 1,
            'weight' => 1,
          ],
          'additional_text' => [
            'type' => 'textfield',
            'title' => $this->t('Texto adicional'),
            'service_field' => 'additional_text',
            'show' => 1,
            'weight' => 1,
          ],
          'subTitle' => [
            'type' => 'textfield',
            'title' => $this->t('Texto final'),
            'service_field' => 'content',
            'show' => 1,
            'weight' => 1,
            'max_length' => 100,
          ],
        ],
      ],
      'files' => [],
      'others' => [],
    ];
  }

}
