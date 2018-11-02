<?php

namespace Drupal\adf_cards\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\file\FileUsage\FileUsageInterface;
use Drupal\file\Entity\File;

/**
 * Provides a 'CardBase' block.
 *
 * @Block(
 *  id = "base_card",
 *  admin_label = @Translation("Card base"),
 * )
 */
class CardBase extends BlockBase {

  protected $uuid;



  /**
   * Class constructor.
   */
  /*

  protected $entityTypeManager;

  protected $fileUsage;
  public function __construct(EntityTypeManagerInterface $entity_type_manager, FileUsageInterface $file_usage) {

    $this->entityTypeManager = $entity_type_manager;
    $this->fileUsage = $file_usage;

  }
  */

  /**
   * {@inheritdoc}
   */
  /*
  public static function create(ContainerInterface $container) {
    return new static(
      $container->get('entity_type.manager'),
      $container->get('file.usage')
    );
  }
  */

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    // Return parent::defaultConfiguration()
    return parent::defaultConfiguration();
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {

    $form['header'] = [
      '#type' => 'details',
      '#title' => $this->t('Header'),
      '#description' => $this->t('Parámetros parte superior'),
      '#open' => TRUE,
    ];

    $form['header']['table_fields'] = [
      '#type' => 'table',
      '#header' => [
        $this->t('Field'),
        $this->t('Input'),
        $this->t('Show'),
        $this->t('Weight'),
        '',
      ],
      '#empty' => $this->t('There are no items yet. Add an item.'),
      '#tabledrag' => [
        [
          'action' => 'order',
          'relationship' => 'sibling',
          'group' => 'fields-order-weight',
        ],
      ],
    ];

    $table_fields = $this->configuration['header']['table_fields'];
    uasort($table_fields, [
      'Drupal\Component\Utility\SortArray',
      'sortByWeightElement',
    ]);

    $form = $this->generateTable('header', $table_fields, $form);

    unset($table_fields);

    $form['body'] = [
      '#type' => 'details',
      '#title' => $this->t('Body'),
      '#description' => $this->t('Parámetros parte inferior'),
      '#open' => TRUE,
    ];

    $form['body']['table_fields'] = [
      '#type' => 'table',
      '#header' => [
        $this->t('Field'),
        $this->t('Input'),
        $this->t('Show'),
        $this->t('Weight'),
        '',
      ],
      '#empty' => $this->t('There are no items yet. Add an item.'),
      '#tabledrag' => [
        [
          'action' => 'order',
          'relationship' => 'sibling',
          'group' => 'fields-order-weight',
        ],
      ],
    ];

    $table_fields = $this->configuration['body']['table_fields'];
    uasort($table_fields, [
      'Drupal\Component\Utility\SortArray',
      'sortByWeightElement',
    ]);

    $form = $this->generateTable('body', $table_fields, $form);

    unset($table_fields);

    $form['files'] = [
      '#type' => 'details',
      '#title' => $this->t('Files'),
      '#description' => $this->t('Parámetros para subir archivos'),
      '#open' => TRUE,
    ];

    $form['files']['table_fields'] = [
      '#type' => 'table',
      '#header' => [
        $this->t('Field'),
        $this->t('Input'),
        $this->t('Show'),
        $this->t('Weight'),
        '',
      ],
      '#empty' => $this->t('There are no items yet. Add an item.'),
      '#tabledrag' => [
        [
          'action' => 'order',
          'relationship' => 'sibling',
          'group' => 'fields-order-weight',
        ],
      ],
    ];


    $table_fields = $this->configuration['files']['table_fields'];
    uasort($table_fields, [
      'Drupal\Component\Utility\SortArray',
      'sortByWeightElement',
    ]);
    $form = $this->generateTable('files', $table_fields, $form);

    return $form;
  }

  /**
   * Generación de tabla para configurar items.
   */
  public function generateTable($key, $table_fields, $form) {
    foreach ($table_fields as $id => $entity) {
      // TableDrag: Mark the invoice row as draggable.
      $form[$key]['table_fields'][$id]['#attributes']['class'][] = 'draggable';
      // TableDrag: Sort the table row according to its existing/configured
      // weight.
      $form[$key]['table_fields']['#weight'] = $entity['weight'];
      // Some invoice columns containing raw markup.
      $form[$key]['table_fields'][$id]['label'] = [
        '#plain_text' => $entity['title'],
      ];

      if ($entity['type'] == 'url') {
        $form[$key]['table_fields'][$id]['input'] = [
          '#type' => 'fieldset',
          '#title' => $this->t('Datos del link'),
        ];

        $form[$key]['table_fields'][$id]['input']['link'] = [
          '#type' => 'url',
          '#title' => $this->t('Url'),
          '#default_value' => $entity['input']['link'],
          '#size' => 40,
        ];

        $form[$key]['table_fields'][$id]['input']['label'] = [
          '#type' => 'textfield',
          '#title' => $this->t('Label'),
          '#default_value' => $entity['input']['label'],
          '#size' => 40,
        ];
      }
      else {
        $form[$key]['table_fields'][$id]['input'] = [
          '#type' => $entity['type'],
          '#default_value' => $entity['input'],
          '#size' => 40,
        ];
      }

      if (isset($entity['max_length'])) {
        $form[$key]['table_fields'][$id]['input']['#maxlength'] = $entity['max_length'];
      }

      if ($entity['type'] == 'managed_file') {
        $form[$key]['table_fields'][$id]['input']['#upload_location'] = 'public://cards';
        $form[$key]['table_fields'][$id]['input']['#multiple'] = TRUE;
      }

      if ($entity['type'] == 'text_format') {
        $form[$key]['table_fields'][$id]['input']['#default_value'] = $entity['input']['value'];
        $form[$key]['table_fields'][$id]['input']['#format'] = 'full_html';
      }

      $form[$key]['table_fields'][$id]['show'] = [
        '#type' => 'checkbox',
        '#default_value' => $entity['show'],
      ];
      // TableDrag: Weight column element.
      $form[$key]['table_fields'][$id]['weight'] = [
        '#type' => 'weight',
        '#title' => $this->t('Weight for @title', ['@title' => $entity['title']]),
        '#title_display' => 'invisible',
        '#default_value' => $entity['weight'],
        // Classify the weight element for #tabledrag.
        '#attributes' => ['class' => ['fields-order-weight']],
      ];

      $form[$key]['table_fields'][$id]['service_field'] = [
        '#type' => 'hidden',
        '#value' => $entity['service_field'],
      ];

      $form[$key]['table_fields'][$id]['type'] = [
        '#type' => 'hidden',
        '#value' => $entity['type'],
      ];
    }
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {

/*
   $imageA = $form_state->getValue('archivos');
   $fileA = File::load($imageA[0]);
   $fileA->setPermanent();
   $fileA->save();
   */



    $this->configuration['header'] = $form_state->getValue('header');
    $this->configuration['body'] = $form_state->getValue('body');
    $this->configuration['files'] = $form_state->getValue('files');

    $filesArray = [
      'header' => $this->configuration['header'],
      'body' => $this->configuration['body'],
      'files' => $this->configuration['files'],
    ];

    foreach ($filesArray as $item) {
      foreach ($item['table_fields'] as $field) {
        if ($field['type'] == 'managed_file') {
          $fid = reset($field['input']);
          // Save file permanently.
          if ($fid) {
            $this->setFileAsPermanent($fid);
          }
        }
      }
    }
  }

  /**
   * Implementación de cardBuildHeader.
   */
  public function cardBuildHeader() {
    // TODO validar porque algunos bloques no tienen uuid.
    $this->uuid = isset($this->configuration['uuid']) ? $this->configuration['uuid'] : md5('test' . rand(0, 500));
    $this->configuration['uuid'] = isset($this->configuration['uuid']) ? $this->configuration['uuid'] : $this->uuid;
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $this->cardBuildHeader();

    // Ordenamiento de items (Header).
    $table_fields = $this->configuration['header']['table_fields'];
    uasort($table_fields, [
      'Drupal\Component\Utility\SortArray',
      'sortByWeightElement',
    ]);
    $this->configuration['header']['table_fields'] = $table_fields;
    $header = $this->getRenderData($this->configuration['header']);

    // Ordenamiento de items (Body).
    $table_fieldsB = $this->configuration['body']['table_fields'];
    uasort($table_fieldsB, [
      'Drupal\Component\Utility\SortArray',
      'sortByWeightElement',
    ]);
    $this->configuration['body']['table_fields'] = $table_fieldsB;
    $body = $this->getRenderData($this->configuration['body']);


    // Ordenamiento de items (Archivos).
    $table_fieldsC = $this->configuration['files']['table_fields'];
    uasort($table_fieldsC, [
      'Drupal\Component\Utility\SortArray',
      'sortByWeightElement',
    ]);
    $this->configuration['files']['table_fields'] = $table_fieldsC;
    $files = $this->getRenderData($this->configuration['files']);

    $build = [];
    $build = [
      '#theme' => 'card_base',
      '#uuid' => $this->configuration['uuid'],
      '#header' => $header,
      '#body' => $body,
      '#files' => $files,
    ];

    return $build;
  }

  /**
   * Tratamiento de información a mostrar.
   */
  public function getRenderData($input) {
    $data = [];

    foreach ($input['table_fields'] as $item) {
      $element = [];
      switch ($item['type']) {
        case 'managed_file':
          if ($item['service_field'] == 'image') {
            // $this->entityTypeManager->getStorage('file')->load($id);
            // Opcion para evitar el siguiente error
            // File::load calls should be avoided in classes
            // use dependency injection instead.
            // $file = File::load(reset($item['input']))
            // $file = $this->entityTypeManager->getStorage('file')->load(reset($item['input']))
            $file = File::load(reset($item['input']));
            if ($file) {
              $element['data'] = file_create_url($file->getFileUri());
              $element['type'] = 'image';
            }
          }
          break;

        case 'text_format':
          $element['data'] = $item['input']['value'];
          $element['type'] = 'formated';
          break;

        case 'url':
          $element['data'] = [
            'link' => $item['input']['link'],
            'label' => $item['input']['label'],
          ];
          $element['type'] = 'url';
          break;

        default:
          $element['data'] = $item['input'];
          $element['type'] = 'default';
          break;
      }

      if ($item['show'] == 1) {
        $data[] = $element;
      }
    }
    return $data;
  }

  /**
   * {@inheritdoc}
   */
  public function setFileAsPermanent($fid) {
    if (is_array($fid)) {
      $fid = array_shift($fid);
    }

    // $file = File::load($fid)
    // $file = $this->entityTypeManager->getStorage('file')->load($fid)
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
    // $this->fileUsage->add($file, 'my_module', 'file', $file_id);
    // \Drupal::service('file.usage')->add($file, 'adf_cards', 'adf_cards', 1);.
    // $this->fileUsage->add($file, 'adf_cards', 'adf_cards', 1);.
    \Drupal::service('file.usage')->add($file, 'adf_cards', 'adf_cards', 1);
  }

}
