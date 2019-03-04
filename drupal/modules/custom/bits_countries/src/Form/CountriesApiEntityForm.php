<?php

namespace Drupal\bits_countries\Form;

use Drupal\Core\Entity\EntityForm;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class CountriesApiEntityForm.
 */
class CountriesApiEntityForm extends EntityForm {

  /**
   * {@inheritdoc}
   */
  public function form(array $form, FormStateInterface $form_state) {
    $form = parent::form($form, $form_state);

    $countries_api_entity = $this->entity;
    $form['label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Label'),
      '#maxlength' => 255,
      '#default_value' => $countries_api_entity->label(),
      '#description' => $this->t("Label for the county."),
      '#required' => TRUE,
    ];

    $form['url'] = [
      '#type' => 'url',
      '#title' => $this->t('URL'),
      '#default_value' => $countries_api_entity->get('url'),
      '#description' => $this->t("Url for country."),
    ];

    $form['id'] = [
      '#type' => 'machine_name',
      '#default_value' => $countries_api_entity->id(),
      '#machine_name' => [
        'exists' => '\Drupal\bits_countries\Entity\CountriesApiEntity::load',
      ],
      '#disabled' => !$countries_api_entity->isNew(),
    ];

    /* You will need additional form elements for your custom properties. */

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    $countries_api_entity = $this->entity;
    $status = $countries_api_entity->save();

    switch ($status) {
      case SAVED_NEW:
        drupal_set_message($this->t('Created the %label Countries api entity.', [
          '%label' => $countries_api_entity->label(),
        ]));
        break;

      default:
        drupal_set_message($this->t('Saved the %label Countries api entity.', [
          '%label' => $countries_api_entity->label(),
        ]));
    }
    $form_state->setRedirectUrl($countries_api_entity->toUrl('collection'));
  }

}
