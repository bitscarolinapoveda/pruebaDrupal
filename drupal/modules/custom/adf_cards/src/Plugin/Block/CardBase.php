<?php

namespace Drupal\adf_cards\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\file\FileUsage\FileUsageInterface;
use Drupal\file\Entity\File;
use Drupal\Core\Entity\ContentEntityType;

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
    $this->_uaSort($table_fields);

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
    $this->_uaSort($table_fields);

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


    $entityName = 'node';
    $entityType = '';
    $entityLimit = 4;
    $entityOffset = 0;

    //  Si viene desde ajax el carga los valores para el formilario
    if (get_class($form_state) == 'Drupal\Core\Form\SubformState') {
      $ourFormState = $form_state->getCompleteFormState();
    }
    $bnCargoDesdeAjax = FALSE;
    if (!empty((string) $ourFormState->getTriggeringElement()['#value'])) {
      \Drupal::logger('casa')->notice('cargado desde ajax');
      $bnCargoDesdeAjax = TRUE;
    }
    if ($bnCargoDesdeAjax) {
      $entityName = $ourFormState->getValue(['settings','entity','name']);
      $entityType = $ourFormState->getValue(['settings','entity','type']);
      $entityLimit = $ourFormState->getValue(['settings','entity','limit']);
      $entityOffset = $ourFormState->getValue(['settings','entity','offset']);
    }

    if (isset($this->configuration['entity'])) {
      $contentEntityTypes = [];
      $entityTypeDefinations = \Drupal::entityTypeManager()->getDefinitions();
      /* @var $definition EntityTypeInterface */
      foreach ($entityTypeDefinations as $definition) {
        $contentEntityTypes[$definition->id()] = $definition->id();
      }


      // Gather the number of names in the form already.
      $fromAjax = $form_state->get('from_ajax');
      // We have to ensure that there is at least one name field.
      if ($fromAjax === NULL) {
        $fromAjax = $form_state->set('from_ajax', FALSE);
      }

      // Details containers replace D7's collapsible field sets.
      $form['entity'] = [
        '#type' => 'details',
        '#title' => 'Elementos a mostrar',
        '#open' => TRUE,
        '#prefix' => '<div id="entity-content">',
        '#suffix' => '</div>'
      ];

      //  Si existe el entity name, crea el campo y carga el valor guardado.
      if (isset($this->configuration['entity']['name'])) {
        //  Si no carga desde ajax carga la configuración
        if (!$bnCargoDesdeAjax) {
          $entityName = $this->configuration['entity']['name'];
        }
      }

      $form['entity']['name'] = [
        '#type' => 'select',
        '#options' => $contentEntityTypes,
        '#empty_option' => $this->t('-select-'),
        '#description' => $this->t('Select, #type = select'),
        '#title' => $this->t('Nombre de la entidad'),
        '#default_value' => $entityName,
        '#ajax' => [
          'callback' => [$this, 'changeEntityType'],
          'wrapper' => 'entity-content',
        ],
      ];

      // Si existe el entity type, crea el campo y carga el valor guardado.
      if (isset($this->configuration['entity']['type'])) {
        //  Si no carga desde ajax carga la configuración
        if (!$bnCargoDesdeAjax) {
          $entityType = $this->configuration['entity']['type'];
        }

        // Carga los tipos de contenido de la entidad, si esta existe
        $typesOfEntity = \Drupal::service('entity_type.bundle.info')->getBundleInfo($entityName);
        $bundleEntityTypes = [];
        foreach ($typesOfEntity as $key => $value) {
          $bundleEntityTypes[$key] = $value['label'];
        }
      }
      if (count($bundleEntityTypes) > 0) {
        $form['entity']['type'] = [
          '#type' => 'select',
          '#options' => $bundleEntityTypes,
          '#empty_option' => $this->t('all'),
          '#description' => $this->t('Select, #type = select'),
          '#title' => $this->t('Tipo de entidad'),
          '#default_value' => $entityType,
          '#ajax' => [
            'callback' => [$this, 'changeEntityType'],
            'wrapper' => 'entity-content',
          ],
        ];
      }

      // Crea el campo limite y asigna el valor
      if (isset($this->configuration['entity']['limit'])) {
        //  Si no carga desde ajax carga la configuración
        if (!$bnCargoDesdeAjax) {
          $entityLimit = (int) $this->configuration['entity']['limit'];
        }
      }
      $form['entity']['limit'] = [
        '#type' => 'number',
        '#title' => $this->t('Limite'),
        '#description' => $this->t('Textarea, #type = textarea'),
        '#default_value' => $entityLimit,
        '#ajax' => [
          'callback' => [$this, 'changeEntityType'],
          'wrapper' => 'entity-content',
          'event' => 'keyup',
        ],
      ];

      //
      if (isset($this->configuration['entity']['offset'])) {
        //  Si no carga desde ajax carga la configuración
        if (!$bnCargoDesdeAjax) {
          $entityOffset = (int) $this->configuration['entity']['offset'];
        }
      }
      $form['entity']['offset'] = [
        '#type' => 'number',
        '#title' => $this->t('Offset'),
        '#description' => $this->t('Textarea, #type = textarea'),
        '#default_value' => $entityOffset,
        '#ajax' => [
          'callback' => [$this, 'changeEntityType'],
          'wrapper' => 'entity-content',
          'event' => 'keyup',
        ],
      ];
/*

    $connection_info = $connection->getConnectionOptions();
    // Order by primary keys.
    $order = '';
    $query = "SELECT `COLUMN_NAME` FROM `information_schema`.`COLUMNS`
    WHERE (`TABLE_SCHEMA` = '" . $connection_info['database'] . "')
    AND (`TABLE_NAME` = '{" . $table . "}') AND (`COLUMN_KEY` = 'PRI')
    ORDER BY COLUMN_NAME";
    $results = $connection->query($query);
    while (($row = $results->fetchAssoc()) !== FALSE) {
      $order .= $row['COLUMN_NAME'] . ', ';
    }

      $records = db_query('SELECT name FROM {config} WHERE name LIKE "core.entity_view_display.' . $entityName . '.%"')->fetchField();
      foreach ($records as $record) {

      }

      $form['entity']['default_view_mode'] = [
        '#type' => 'radios',
        '#title' => t('Preview comment'),
        '#default_value' => variable_get('comment_preview', 1),
        '#options' => array(t('Optional'), t('Required')),
      ];
*/


      $query = \Drupal::entityQuery($entityName);
        $query->condition('status', 1);
        if ($entityType) {
          $query->condition('type', $entityType);
        }
        if (isset($entityLimit) && isset($entityOffset)) {
          $query->range($entityOffset, $entityLimit + $entityOffset);
        }
        $entityIds = $query->execute();

      $form['entity']['table-row'] = [
        '#type' => 'table',
        '#header' => [
          $this->t('Name'),
          $this->t('Description'),
          $this->t('Weight'),
        ],
        '#empty' => $this->t('Sorry, There are no items!'),
        // TableDrag: Each array value is a list of callback arguments for
        // drupal_add_tabledrag(). The #id of the table is automatically
        // prepended; if there is none, an HTML ID is auto-generated.
        '#tabledrag' => [
          [
            'action' => 'order',
            'relationship' => 'sibling',
            'group' => 'table-sort-weight',
          ],
        ],
      ];

      $arRowForWeight = [];
      foreach ($entityIds as $entityId) {
        $entityStorage = \Drupal::entityManager()->getStorage($entityName);
        $entity = $entityStorage->load($entityId);
        $label = $entity->label();
        $id = $entity->id();

        $weight = 1;
        if (isset($this->configuration['entity']['weight'][$id])) {
          $weight = (int) $this->configuration['entity']['weight'][$id];
        }

        $arRows[$id] = [
          // TableDrag: Mark the table row as draggable.
          '#attributes' => ['class' => [0 => 'draggable']],
          // TableDrag: Sort the table row according to its existing/configured.
          // weight.
          '#weight' => $weight,
          'name' => [
            '#markup' => $label,
          ],
          'casa' => [
            '#markup' => '<name>bb',
          ],
          // TableDrag: Weight column element.
          'weight' => [
            '#type' => 'weight',
            '#title' => $this->t('Weight for @title', ['@title' => $label]),
            '#title_display' => 'invisible',
            '#default_value' => $weight,
            // Classify the weight element for #tabledrag.
            '#attributes' => ['class' => ['table-sort-weight']],
          ],
        ];

        //  Si esta repetido intenta con un valor menos
        while (isset($arRowForWeight[$weight])) {
          $weight -= 1;
        }
        $arRowForWeight[$weight] = $id;
      }
    }
    ksort($arRowForWeight);

    foreach ($arRowForWeight as $rowForWeight) {
      $form['entity']['table-row'][$rowForWeight] = $arRows[$rowForWeight];
    }

    $table_fields = $this->configuration['files']['table_fields'] ?? [];
    $this->_uaSort($table_fields);
    $form = $this->generateTable('files', $table_fields, $form);

    return $form;
  }

  /**
   * Load Entity info.
   *
   * @param array $form
   * @param FormStateInterface $form_state
   * @return AjaxResponse
   */
  public function changeEntityType(array &$form, FormStateInterface $form_state) {

    \Drupal::logger('casa')->notice('form ajax');
    return $form['settings']['entity'];
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
    $this->configuration['entity'] = $form_state->getValue('entity');

    $arEntityIds = $form_state->getValues()['entity']['table-row'];
    foreach ($arEntityIds as $id => $weight) {
      $this->configuration['entity']['weight'][$id] = $weight['weight'];
    }

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
    $this->_uaSort($table_fields);
    $this->configuration['header']['table_fields'] = $table_fields;
    $header = $this->getRenderData($this->configuration['header']);

    // Ordenamiento de items (Body).
    $table_fieldsB = $this->configuration['body']['table_fields'];
    $this->_uaSort($table_fieldsB);
    $this->configuration['body']['table_fields'] = $table_fieldsB;
    $body = $this->getRenderData($this->configuration['body']);


    // Ordenamiento de items (Archivos).
    $table_fieldsC = $this->configuration['files']['table_fields'];
    $this->_uaSort($table_fieldsC);
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

  private function _uaSort(&$array) {
    if (is_array($array)) {
      uasort($array, [
        'Drupal\Component\Utility\SortArray',
        'sortByWeightElement',
      ]);
    }
    elseif ($array === '') {
      $array = [];
    }
  }

}
