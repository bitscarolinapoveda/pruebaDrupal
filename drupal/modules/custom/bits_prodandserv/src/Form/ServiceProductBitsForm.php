<?php

namespace Drupal\bits_prodandserv\Form;

use Drupal\Core\Entity\EntityForm;
use Drupal\Core\Form\FormStateInterface;
use Drupal\file\Entity\File;

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
        'exists' => '\Drupal\bits_prodandserv\Entity\ServiceProductBits::load',
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


    $modules = [];
    $ourModules = $service_product_bits->get('modules');
    if ($ourModules && is_array($ourModules)) {
      foreach ($ourModules as $key => $value) {
        $modules[] = $nodes = \Drupal::entityTypeManager()->getStorage('node')->load($value['target_id']);
      }
    }
    $form['modules'] = [
      '#title' => t('Modules'),
      '#type' => 'entity_autocomplete',
      '#tags' => TRUE,
      '#target_type' => 'node',
      '#default_value' => $modules,
      '#selection_settings' => [
        'target_bundles' => ['module_information'],
      ],
    ];


    $leftMedia = '';
    $ourLeftMedia = $service_product_bits->get('left_media');
    if ($ourLeftMedia) {
        $leftMedia = $nodes = \Drupal::entityTypeManager()->getStorage('node')->load($ourLeftMedia);
    }
    $form['left_media'] = [
      '#title' => t('LeftMedia'),
      '#type' => 'entity_autocomplete',
      '#target_type' => 'node',
      '#selection_handler' => 'default',
      '#default_value' => $leftMedia,
      '#selection_settings' => [
        'target_bundles' => ['imedical_media'],
      ],
    ];


    $technologies = [];
    $ourTechnologies = $service_product_bits->get('technologies');
    if ($ourTechnologies && is_array($ourTechnologies)) {
      foreach ($ourTechnologies as $key => $value) {
        $technologies[] = $nodes = \Drupal::entityTypeManager()->getStorage('node')->load($value['target_id']);
      }
    }
    $form['technologies'] = [
      '#title' => t('Technologies'),
      '#type' => 'entity_autocomplete',
      '#tags' => TRUE,
      '#target_type' => 'node',
      '#selection_handler' => 'default',
      '#default_value' => $technologies,
      '#selection_settings' => [
        'target_bundles' => ['technologies'],
      ]
    ];


    $testimonies = [];
    $ourTestimonies = $service_product_bits->get('testimonies');
    if ($ourTestimonies && is_array($ourTestimonies)) {
      foreach ($ourTestimonies as $key => $value) {
        $testimonies[] = $nodes = \Drupal::entityTypeManager()->getStorage('node')->load($value['target_id']);
      }
    }
    $form['testimonies'] = [
      '#title' => t('Testimonies'),
      '#type' => 'entity_autocomplete',
      '#tags' => TRUE,
      '#target_type' => 'node',
      '#selection_handler' => 'default',
      '#default_value' => $testimonies,
      '#selection_settings' =>  [
        'target_bundles' => ['lo_que_dice_el_cliente'],
      ]
    ];


    $achievements = [];
    $ourAchievements = $service_product_bits->get('achievements');
    if ($ourAchievements && is_array($ourAchievements)) {
      foreach ($ourAchievements as $key => $value) {
        $achievements[] = $nodes = \Drupal::entityTypeManager()->getStorage('node')->load($value['target_id']);
      }
    }
    $form['achievements'] = [
      '#title' => t('Achievements'),
      '#type' => 'entity_autocomplete',
      '#tags' => TRUE,
      '#target_type' => 'node',
      '#selection_handler' => 'default',
      '#default_value' => $achievements,
      '#selection_settings' => [
        'target_bundles' => ['logros'],
      ]
    ];


    $team = [];
    $ourTeam = $service_product_bits->get('team');
    if ($ourTeam && is_array($ourTeam)) {
      foreach ($ourTeam as $key => $value) {
        $team[] = $nodes = \Drupal::entityTypeManager()->getStorage('node')->load($value['target_id']);
      }
    }
    $form['team'] = [
      '#title' => t('Team'),
      '#type' => 'entity_autocomplete',
      '#tags' => TRUE,
      '#target_type' => 'node',
      '#selection_handler' => 'default',
      '#default_value' => $team,
      '#selection_settings' => [
        'target_bundles' => ['equipo_de_trabajo'],
      ]
    ];


    $rightMedia = '';
    $ourRightMedia = $service_product_bits->get('right_media');
    if ($ourRightMedia) {
      $rightMedia = $nodes = \Drupal::entityTypeManager()->getStorage('node')->load($ourRightMedia);
    }
    $form['right_media'] = [
      '#title' => t('RightMedia'),
      '#type' => 'entity_autocomplete',
      '#target_type' => 'node',
      '#selection_handler' => 'default',
      '#default_value' => $rightMedia,
      '#selection_settings' => [
        'target_bundles' => ['imedical_media'],
      ]
    ];


    $video = '';
    $ourVideo = $service_product_bits->get('video');
    if ($ourVideo) {
      $video = $nodes = \Drupal::entityTypeManager()->getStorage('node')->load($ourVideo);
    }
    $form['video'] = [
      '#title' => t('Video'),
      '#type' => 'entity_autocomplete',
      '#target_type' => 'node',
      '#selection_handler' => 'default',
      '#default_value' => $video,
      '#selection_settings' => [
        'target_bundles' => ['video_plus_information'],
      ]
    ];


    $clients = [];
    $ourClients = $service_product_bits->get('clients');
    if ($ourClients && is_array($ourClients)) {
      foreach ($ourClients as $key => $value) {
        $clients[] = $nodes = \Drupal::entityTypeManager()->getStorage('node')->load($value['target_id']);
      }
    }
    $form['clients'] = [
      '#title' => t('Clients'),
      '#type' => 'entity_autocomplete',
      '#tags' => TRUE,
      '#target_type' => 'node',
      '#selection_handler' => 'default',
      '#default_value' => $clients,
      '#selection_settings' => [
        'target_bundles' => ['clients'],
      ]
    ];

    return $form;
  }
  /**
   * {@inheritdoc}
   */
  public function setFileAsPermanent($fid) {
    if (is_array($fid)) {
      $fid = array_shift($fid);
    }

    $file = File::load($fid);

    // If file doesn't exist return.
    if (!is_object($file)) {
      return;
    }

    // Set as permanent.
    $file->setPermanent();

    // Save file.
    $file->save();

    // Add usage file.
    \Drupal::service('file.usage')->add($file, 'bits_prodandserv', 'bits_prodandserv', 1);
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
    $fid = reset($service_product_bits->short_image);
    // Save file permanently.
    if ($fid) {
      $this->setFileAsPermanent($fid);
    }
    $fidlarge = reset($service_product_bits->large_image);
    // Save file permanently.
    if ($fidlarge) {
      $this->setFileAsPermanent($fidlarge);
    }
    $form_state->setRedirectUrl($service_product_bits->toUrl('collection'));
  }

}
