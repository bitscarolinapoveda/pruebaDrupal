<?php

namespace Drupal\adf_cards\Plugin\Block;

use Drupal\Core\Form\FormStateInterface;
use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'ExampleCard' block.
 *
 * @Block(
 *  id = "example_card",
 *  admin_label = @Translation("Card ejemplo"),
 * )
 */
class ExampleCard extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'header' => [
        'table_fields' => [
          'title' => [
            'type' => 'text_format',
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
            'max_length' => 10,
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
        'example_text' => t('Example'),
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);

    $form['others'] = [
      '#type' => 'details',
      '#title' => $this->t('Otros ajustes'),
      '#open' => 'TRUE',
    ];

    $form['others']['example_text'] = [
      '#title' => $this->t('Texto de ejemplo'),
      '#type' => 'textfield',
      '#default_value' => $this->configuration['others']['example_text'],
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    parent::blockSubmit($form, $form_state);
    $this->configuration['others'] = $form_state->getValue('others');
  }

}
