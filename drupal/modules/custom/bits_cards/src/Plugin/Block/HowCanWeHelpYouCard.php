<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'HowCanWeHelpYouCard' block.
 *
 * @Block(
 *  id = "howcanwehelpyou_card",
 *  admin_label = @Translation("HowCanWeHelpYou card"),
 * )
 */
class HowCanWeHelpYouCard extends CardBase {

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
        ],
      ],
      'body' => [
        'table_fields' => [
          'text_form_left' => [
            'type' => 'textfield',
            'title' => $this->t('Formulario Izquierda'),
            'service_field' => 'text_form_left',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'image_form_left' => [
            'type' => 'managed_file',
            'title' => $this->t('Imagen formulario Izquierda'),
            'service_field' => 'image',
            'show' => 1,
            'weight' => 1,
            'max_length' => 1,
            'upload_validators'  => [
              'file_validate_extensions' => ['gif png jpg jpeg'],
            ],
          ],
          'text_form_right' => [
            'type' => 'textfield',
            'title' => $this->t('Formulario Derecha'),
            'service_field' => 'text_form_right',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'image_form_right' => [
            'type' => 'managed_file',
            'title' => $this->t('Imagen formulario Derecha'),
            'service_field' => 'image',
            'show' => 1,
            'weight' => 1,
            'max_length' => 1,
            'upload_validators'  => [
              'file_validate_extensions' => ['gif png jpg jpeg'],
            ],
          ],
        ],
      ],
      'others' => [],
    ];
  }

}
