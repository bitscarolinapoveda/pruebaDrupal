<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'ComplementFormBitsAmericasCard' block.
 *
 * @Block(
 *  id = "complement_form_bits_americas",
 *  admin_label = @Translation("Complements Form Bits Americas"),
 * )
 */
class ComplementFormCard extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'header' => [
        'table_fields' => [
          'alert_error' => [
            'type' => 'textfield',
            'title' => $this->t('Mensaje de alerta ¨error¨ del Formulario'),
            'service_field' => 'alert_error',
            'show' => 1,
            'weight' => 1,
            'max_length' => 30,
          ],
          'alert_required' => [
            'type' => 'textfield',
            'title' => $this->t('Mensaje de alerta ¨required¨ del Formulario'),
            'service_field' => 'alert_required',
            'show' => 1,
            'weight' => 1,
            'max_length' => 30,
          ],
          'link_approved' => [
            'type' => 'textfield',
            'title' => $this->t('Link de Términos y Condiciones del Formulario'),
            'service_field' => 'link_approved',
            'show' => 1,
            'weight' => 1,
            'max_length' => 30,
          ],
          'link_descrip' => [
            'type' => 'textfield',
            'title' => $this->t('Descripción Link de Términos y Condiciones'),
            'service_field' => 'link_descrip',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'text_button' => [
            'type' => 'textfield',
            'title' => $this->t('Botón del Formulario'),
            'service_field' => 'text_button',
            'show' => 1,
            'weight' => 1,
            'max_length' => 10,
          ],
          'alert_required' => [
            'type' => 'textfield',
            'title' => $this->t('Mensaje Datos Obligatorios del Formulario'),
            'service_field' => 'alert_required',
            'show' => 1,
            'weight' => 1,
            'max_length' => 20,
          ],
          'message_success' => [
            'type' => 'textfield',
            'title' => $this->t('Mensaje de Respuesta Satisfactoria'),
            'service_field' => 'message_success',
            'show' => 1,
            'weight' => 1,
            'max_length' => 150,
          ],
          'button_hover_empty' => [
            'type' => 'textfield',
            'title' => $this->t('Mensaje cuando faltan datos'),
            'service_field' => 'button_hover_empty',
            'show' => 1,
            'weight' => 1,
            'max_length' => 30,
          ],
          'button_hover_success' => [
            'type' => 'textfield',
            'title' => $this->t('Mensaje para enviar datos'),
            'service_field' => 'button_hover_success',
            'show' => 1,
            'weight' => 1,
            'max_length' => 30,
          ]
        ],
      ],
      'body' => [],
      'files' => [],
      'others' => [],
    ];
  }

}
