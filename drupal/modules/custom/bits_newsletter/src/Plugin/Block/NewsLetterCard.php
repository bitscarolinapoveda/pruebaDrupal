<?php

namespace Drupal\bits_newsletter\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'NewsLetterCard' block.
 *
 * @Block(
 *  id = "newsletter_card",
 *  admin_label = @Translation("NewsLetter card"),
 * )
 */
class NewsLetterCard extends CardBase {

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
            'input' => $this->t('Newsletter'),
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
        ],
      ],
      'body' => [
        'table_fields' => [
          'button' => [
            'type' => 'textfield',
            'title' => $this->t('Label del Botón'),
            'service_field' => 'button',
            'show' => 1,
            'weight' => 1,
          ],
        ],
      ],
      'others' => [],
    ];
  }

}
