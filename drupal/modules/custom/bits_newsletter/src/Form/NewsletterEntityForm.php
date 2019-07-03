<?php

namespace Drupal\bits_newsletter\Form;

use Drupal\Core\Entity\ContentEntityForm;
use Drupal\Core\Form\FormStateInterface;

/**
 * Form controller for Newsletter entity edit forms.
 *
 * @ingroup bits_newsletter
 */
class NewsletterEntityForm extends ContentEntityForm {

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    $entity = $this->entity;

    $status = parent::save($form, $form_state);

    switch ($status) {
      case SAVED_NEW:
        drupal_set_message($this->t('Created the %label Newsletter entity.', [
          '%label' => $entity->label(),
        ]));
        break;

      default:
        drupal_set_message($this->t('Saved the %label Newsletter entity.', [
          '%label' => $entity->label(),
        ]));
    }
    $form_state->setRedirect('entity.newsletter_entity.canonical', ['newsletter_entity' => $entity->id()]);
  }

}
