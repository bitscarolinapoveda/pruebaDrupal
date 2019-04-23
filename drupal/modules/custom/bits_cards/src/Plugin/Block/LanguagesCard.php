<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides a 'LanguagesCard' block.
 *
 * @Block(
 *  id = "languages_card",
 *  admin_label = @Translation("Languages card"),
 * )
 */
class LanguagesCard extends CardBase {

  /**
   * {@inheritdoc}
   */
  //private $languages;

  public function defaultConfiguration() {
    return [
      'others' => [
        'languages' => [
          'type' => 'checkboxes',
          'options' => $this->languages(),
        ],
      ],
    ];
  }
  private function languages(){
    $languages = \Drupal::languageManager()->getLanguages();
    $options = [];
    foreach ($languages as $key => $value) {
      $options[$key] = $value->getName();
    }
    return $options;
  }

  /*
  private function enabledLanguages(){
    $languages = \Drupal::languageManager()->getLanguages();
    $enables = [];
    foreach ($languages as $key => $value) {
      $enables[] = $key;
    }
    return $enables;
  }
  */

 /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);
    $languages = $this->configuration['others']['languages'];
    unset($languages['type']);
    unset($languages['options']);
    $form['others'] = [
      '#type' => 'details',
      '#title' => $this->t('Otros ajustes'),
      '#open' => 'TRUE',
    ];
    $form['others']['languages'] = [
      '#title' => $this->t('Languages'),
      '#type' => 'checkboxes',
      '#options' => $this->languages(),
      '#default_value' => $languages,
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
