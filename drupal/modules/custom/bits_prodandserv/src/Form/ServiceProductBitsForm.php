<?php

namespace Drupal\bits_prodandserv\Form;

use Drupal\Core\Entity\EntityForm;
use Drupal\Core\Form\FormStateInterface;

/**
 * Class ServiceProductBitsForm.
 */
class ServiceProductBitsForm extends EntityForm {

  /**
   * {@inheritdoc}
   */
  public function form(array $form, FormStateInterface $form_state) {
    $form = parent::form($form, $form_state);

    $service_product_bits = $this->entity;
    $form['type'] = [
      '#title' => t('Service or Product'),
      '#type' => 'select',
      '#options' => [
          'service' => $this->t('Service'),
          'product' => $this->t('Product'),
      ],
      '#description' => t('The type of Service product bits.'),
      '#default_value' => $service_product_bits->get('type'),
      '#required' => TRUE,
    ];

    $form['label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Title'),
      '#maxlength' => 255,
      '#default_value' => $service_product_bits->label(),
      '#description' => $this->t("Label for the Service product bits."),
      '#required' => TRUE,
    ];

    $form['id'] = [
      '#type' => 'machine_name',
      '#default_value' => $service_product_bits->id(),
      '#machine_name' => [
        'exists' => '\Drupal\bits_cards\Entity\ServiceProductBits::load',
      ],
      '#disabled' => !$service_product_bits->isNew(),
    ];

    /* You will need additional form elements for your custom properties. */
    $form['description'] = [
      '#type' => 'textarea',
      '#title' => $this->t('Description'),
      '#default_value' => $service_product_bits->get('description'),
      '#description' => $this->t("Description for the Service product bits."),
    ];

    $form['short_image'] = [
      '#title' => t('Short Image'),
      '#type' => 'managed_file',
      '#description' => t('The uploaded short image for the Service product bits.'),
      '#default_value' => $service_product_bits->get('short_image'),
      '#upload_location' => 'public://images/serviceproduct/',
    ];

    $form['large_image'] = [
      '#title' => t('Large Image'),
      '#type' => 'managed_file',
      '#description' => t('The uploaded large image for the Service product bits.'),
      '#default_value' => $service_product_bits->get('large_image'),
      '#upload_location' => 'public://images/serviceproduct/',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function save(array $form, FormStateInterface $form_state) {
    $service_product_bits = $this->entity;
    $status = $service_product_bits->save();

    switch ($status) {
      case SAVED_NEW:
        drupal_set_message($this->t('Created the %label Service product bits.', [
          '%label' => $service_product_bits->label(),
        ]));
        break;

      default:
        drupal_set_message($this->t('Saved the %label Service product bits.', [
          '%label' => $service_product_bits->label(),
        ]));
    }
    $form_state->setRedirectUrl($service_product_bits->toUrl('collection'));
  }

}
