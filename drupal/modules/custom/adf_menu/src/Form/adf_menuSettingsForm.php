<?php

namespace Drupal\adf_menu\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class adf_menuSettingsForm.
 */
class AdfMenuSettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'adf_menu.adf_menuSettings',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'adf_menu_Settings_Form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('adf_menu.adf_menuSettings');
    $form['select_parameters'] = [
      '#type' => 'checkboxes',
      '#title' => $this->t('Seleccione el menu'),
      '#description' => $this->t('Los menus seleccionados se mostraran en el json creado por el rest :D'),
      '#options' => [
        'Administración' => $this->t('Administración'),
        'Development' => $this->t('Development'),
        'Herramientas' => $this->t('Herramientas'),
        'Menú de cuenta de usuario' => $this->t('Menú de cuenta de usuario'),
        'Navegación principal' => $this->t('Navegación principal'),
        'Pie de página' => $this->t('Pie de página'),
      ],
      '#default_value' => $config->get('select_parameters'),
    ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);

    $this->config('adf_menu.adf_menuSettings')
      ->set('select_parameters', $form_state->getValue('select_parameters'))
      ->save();
  }

}
