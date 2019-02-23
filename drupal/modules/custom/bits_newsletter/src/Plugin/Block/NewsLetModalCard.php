<?php

namespace Drupal\bits_newsletter\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'NewsLetModalCard' block.
 *
 * @Block(
 *  id = "newslettermodal_card",
 *  admin_label = @Translation("NewsLetter modal card"),
 * )
 */
class NewsLetModalCard extends CardBase {

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
          'name' => [
            'type' => 'textfield',
            'title' => $this->t('Nombres'),
            'service_field' => 'name',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'name_description' => [
            'type' => 'textfield',
            'title' => $this->t('Descripción de nombres'),
            'service_field' => 'name_description',
            'show' => 1,
            'weight' => 1,
            'max_length' => 150,
          ],
          'last_name' => [
            'type' => 'textfield',
            'title' => $this->t('Apellidos'),
            'service_field' => 'last_name',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'last_name_description' => [
            'type' => 'textfield',
            'title' => $this->t('Descripción de apellidos'),
            'service_field' => 'last_name_description',
            'show' => 1,
            'weight' => 1,
            'max_length' => 150,
          ],
          'email' => [
            'type' => 'textfield',
            'title' => $this->t('Correo electrónico'),
            'service_field' => 'email',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'email_description' => [
            'type' => 'textfield',
            'title' => $this->t('Descripción de email'),
            'service_field' => 'email_description',
            'show' => 1,
            'weight' => 1,
            'max_length' => 150,
          ],
          'terms_conditions' => [
            'type' => 'url',
            'title' => $this->t('Términos y condiciones'),
            'service_field' => 'terms_conditions',
            'show' => 1,
            'weight' => 1,
          ],
          'button' => [
            'type' => 'textfield',
            'title' => $this->t('Label Botón aceptar'),
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
