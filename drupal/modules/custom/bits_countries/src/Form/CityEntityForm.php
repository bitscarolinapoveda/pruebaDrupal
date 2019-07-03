<?php

namespace Drupal\bits_countries\Form;

use Drupal\Core\Entity\ContentEntityForm;
use Drupal\Core\Form\FormStateInterface;

/**
 * Form controller for City entity edit forms.
 *
 * @ingroup bits_countries
 */
class CityEntityForm extends ContentEntityForm {

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    $entity = $this->entity;

    $status = parent::save($form, $form_state);

    switch ($status) {
      case SAVED_NEW:
        drupal_set_message($this->t('Created the %label City entity.', [
          '%label' => $entity->label(),
        ]));
        break;

      default:
        drupal_set_message($this->t('Saved the %label City entity.', [
          '%label' => $entity->label(),
        ]));
    }
    $form_state->setRedirect('entity.city_entity.canonical', ['city_entity' => $entity->id()]);
  }

}
