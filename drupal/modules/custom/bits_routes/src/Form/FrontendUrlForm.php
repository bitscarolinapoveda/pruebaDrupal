<?php

namespace Drupal\bits_routes\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class FrontendUrlForm.
 */
class FrontendUrlForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'bits_routes.frontendurl',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'frontend_url_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('bits_routes.frontendurl');
    $form['url_del_sitio_frontend'] = [
      '#type' => 'url',
      '#title' => $this->t('Url del sitio frontend'),
      '#description' => $this->t('Url del del sitio frontend donde se debe redireccionar'),
      '#default_value' => $config->get('url_del_sitio_frontend'),
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

    $this->config('bits_routes.frontendurl')
      ->set('url_del_sitio_frontend', $form_state->getValue('url_del_sitio_frontend'))
      ->save();
  }

}
