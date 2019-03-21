<?php

namespace Drupal\bits_security\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class BitsSecurityForm.
 */
class BitsSecurityForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'bits_security.settings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'bits_security_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('bits_security.settings');
    $form['user_settings'] = array(
      '#type' => 'details',
      '#title' => $this->t('User Paths Settings'),
      '#open' => TRUE,
		);

    $form['user_settings']['login_path'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Login Path'),
      '#description' => $this->t('Config Login path'),
      '#maxlength' => 64,
      '#size' => 64,
      '#default_value' => $config->get('login_path'),
    ];
    $form['user_settings']['register_path'] = [
      '#type' => 'textfield',
      '#title' => $this->t('register_path'),
      '#description' => $this->t('Config register path'),
      '#maxlength' => 64,
      '#size' => 64,
      '#default_value' => $config->get('register_path'),
    ];
    $form['user_settings']['password_path'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Password path'),
      '#description' => $this->t('Config Password path'),
      '#maxlength' => 64,
      '#size' => 64,
      '#default_value' => $config->get('password_path'),
    ];
    $form['user_settings']['logout_path'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Logout path'),
      '#description' => $this->t('Config Logout path'),
      '#maxlength' => 64,
      '#size' => 64,
      '#default_value' => $config->get('logout_path'),
    ];
    $form['user_settings']['profile_path'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Profile path'),
      '#description' => $this->t('Config profile path'),
      '#maxlength' => 64,
      '#size' => 64,
      '#default_value' => $config->get('profile_path'),
    ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {
    parent::validateForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);

    $this->config('bits_security.bitssecurity')
      ->set('login_path', $form_state->getValue('login_path'))
      ->set('login_path', $form_state->getValue('login_path'))
      ->set('register_path', $form_state->getValue('register_path'))
      ->set('password_path', $form_state->getValue('password_path'))
      ->set('logout_path', $form_state->getValue('logout_path'))
      ->set('profile_path', $form_state->getValue('profile_path'))
      ->save();
  }

}
