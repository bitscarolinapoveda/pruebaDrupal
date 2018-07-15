<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\Core\Form\FormStateInterface;
use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'FooterBlockSimple' block.
 *
 * @Block(
 *  id = "footer_block_simple",
 *  admin_label = @Translation("Footer Block"),
 * )
 */
class FooterBlockSimple extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'header' => [
        'table_fields' => [
          'subTitle' => [
            'type' => 'textfield',
            'title' => $this->t('Subtítulo'),
            'service_field' => 'subtitle',
            'show' => 1,
            'weight' => 1,
            'max_length' => 10,
          ],
        ],
      ],
      'body' => [
        'table_fields' => [
          'content' => [
            'type' => 'text_format',
            'title' => $this->t('Título'),
            'service_field' => 'title',
            'show' => 1,
            'weight' => 1,
          ],
        ],
      ],
      'others' => [],
    ];
  }

}
