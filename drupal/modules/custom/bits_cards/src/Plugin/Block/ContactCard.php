<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'ContactCard' block.
 *
 * @Block(
 *  id = "contact_card",
 *  admin_label = @Translation("Contact card"),
 * )
 */
class ContactCard extends CardBase {

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
          'address' => [
            'type' => 'url',
            'title' => $this->t('Dirección'),
            'service_field' => 'address',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'position' => [
            'type' => 'radios',
            'title' => $this->t('Posición bloque redes'),
            'service_field' => 'position',
            'options' => [
              'top-left' => $this->t('Superior Izquierdo'),
              'top-right' => $this->t('Superior Derecho'),
              'bottom-left' => $this->t('Inferior Izquierdo'),
              'bottom-right' => $this->t('Inferior Derecho'),
              ],
            'value' => 'bottom-left',
            'show' => 1,
            'weight' => 1,
          ],
        ],
      ],
      'body' => [
        'table_fields' => [],
      ],
      'others' => [
        'steps' => [
          'step_0' => [
            'description' => '',
            'link' => ['url' => '', 'text' => ''],
            'add' => '',
            'remove' => '',
          ],
        ],
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
    $form['others']['steps'] = [
      '#type' => 'fieldgroup',
      '#title' => $this->t('Contenedor redes'),
      '#prefix' => '<div id="container-fields-wrapper">',
      '#suffix' => '</div>',
    ];
    $num_fields = $form_state->get('num_fields');
    if (empty($num_fields)) {
      if (isset($this->configuration['others']['steps'])) {
        $num_fields = count($this->configuration['others']['steps']);
      }
      else {
        $num_fields = 1;
      }
      $form_state->set('num_fields', $num_fields);
    }
    for ($i = 0; $i < $num_fields; $i++) {
      $element = "step_" . $i;
      $form['others']['steps'][$element] = [
        '#type' => 'details',
        '#title' => $this->t('@number Red', ['@number' => $i + 1]),
        '#prefix' => '<div id="inner-container-wrapper">',
        '#suffix' => '</div>',
        '#open' => TRUE,
      ];
      $form['others']['steps'][$element]['description'] = [
        '#type' => 'textfield',
        '#title' => $this->t('Nombre'),
        '#description' => $this->t('Nombre'),
        '#default_value' => isset($this->configuration['others']['steps'][$element]['description']) ? $this->configuration['others']['steps'][$element]['description'] : '',
        '#weight' => '0',
      ];
      $form['others']['steps'][$element]['link'] = [
        '#type' => 'fieldset',
        '#title' => $this->t('URL call to action'),
        '#prefix' => '<div id="container-button-wrapper">',
        '#suffix' => '</div>',
        '#weight' => '1',
      ];
      $form['others']['steps'][$element]['link']['url'] = [
        '#type' => 'url',
        '#title' => $this->t('URL'),
        '#description' => $this->t('Link with button styling'),
        '#default_value' => isset($this->configuration['others']['steps'][$element]['link']['url']) ? $this->configuration['others']['steps'][$element]['link']['url'] : '',
      ];

      $maxlength = 64;

      $form['others']['steps'][$element]['link']['text'] = [
        '#type' => 'textfield',
        '#title' => $this->t('Link class'),
        '#default_value' => isset($this->configuration['others']['steps'][$element]['link']['text']) ? $this->configuration['others']['steps'][$element]['link']['text'] : '',
        '#description' => $this->t("Introduzca un cadena de máximo @n caracteres", ['@n' => $maxlength]),
        '#maxlength' => 64,
        '#size' => 64,
      ];
    }
    $form['others']['steps']['add'] = [
      '#type' => 'submit',
      '#value' => t('Add one more'),
      '#submit' => [[$this, 'addContainerCallback']],
      '#ajax' => [
        'callback' => [$this, 'addfieldsubmit'],
        'wrapper' => 'container-fields-wrapper',
      ],
    ];
    if ($num_fields > 1) {
      $form['others']['steps']['remove'] = [
        '#type' => 'submit',
        '#value' => t('Remove last one'),
        '#submit' => [[$this, 'removeContainerCallback']],
        '#ajax' => [
          'callback' => [$this, 'addfieldsubmit'],
          'wrapper' => 'container-fields-wrapper',
        ],
      ];
    }

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function addfieldsubmit(array &$form, FormStateInterface $form_state) {
    return $form['settings']['others']['steps'];
  }

  /**
   * {@inheritdoc}
   */
  public function addContainerCallback(array &$form, FormStateInterface $form_state) {
    $max = $form_state->get('num_fields') + 1;
    $form_state->set('num_fields', $max);
    $form_state->setRebuild();
  }

  /**
   * {@inheritdoc}
   */
  public function removeContainerCallback(array &$form, FormStateInterface $form_state) {
    $num_fields = $form_state->get('num_fields');
    if ($num_fields > 1) {
      $max = $num_fields - 1;
      $form_state->set('num_fields', $max);
    }
    $form_state->setRebuild();
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    parent::blockSubmit($form, $form_state);
    $this->configuration['others'] = $form_state->getValue('others');
  }

}
