<?php

namespace Drupal\adf_cards\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Entity\EntityTypeBundleInfoInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Logger\LoggerChannelFactory;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\file\FileUsage\FileUsageInterface;
use Drupal\file\Entity\File;
use Drupal\Core\Entity\ContentEntityType;
use Drupal\Core\Url;

/**
 * Provides a 'CardBase' block.
 *
 * @Block(
 *  id = "base_card",
 *  admin_label = @Translation("Card base"),
 * )
 */
class CardBase extends BlockBase implements ContainerFactoryPluginInterface {

  protected $uuid;
  protected $key_config = [
    'header' => [
      'title' => 'Header',
      'description' => 'Parámetros parte superior',
    ],
    'body' => [
      'title' => 'Body',
      'description' => 'Parámetros parte inferior',
    ],
    'files' => [
      'title' => 'Files',
      'description' => 'Parámetros para subir archivos',
    ],
    'table_headers' => [
      'Field',
      'Input',
      'Show',
      'Weight',
      '',
      ],
  ];
  protected $entityTypeManager;
  protected $entity_type_bundle_info;
  protected $logger;
  protected $fileUsageBackend;


  public function __construct(array $configuration, $plugin_id, $plugin_definition,
                              EntityTypeManagerInterface $entityTypeManager,
                              EntityTypeBundleInfoInterface $entity_type_bundle_info = NULL,
                              LoggerChannelFactory $logger,
                              FileUsageInterface $fileUsageBackend
) {
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->entityTypeManager = $entityTypeManager;
    $this->entity_type_bundle_info = $entity_type_bundle_info;
    $this->logger = $logger;
    $this->fileUsageBackend = $fileUsageBackend;
  }


  /**
   * @param \Symfony\Component\DependencyInjection\ContainerInterface $container
   * @param array $configuration
   * @param string $plugin_id
   * @param mixed $plugin_definition
   *
   * @return \Drupal\adf_cards\Plugin\Block\CardBase|\Drupal\Core\Plugin\ContainerFactoryPluginInterface
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {

    return new static(
      $configuration,
      $plugin_id,
      $plugin_definition,
      $container->get('entity_type.manager'),
      $container->get('entity_type.bundle.info'),
      $container->get('logger.factory'),
      $container->get('file.usage')
    );
  }

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
    $keys = array_keys($this->configuration);
    // Se recorre las claves creadas en la configuración para crear el formulario.
    foreach ($keys as $key) {
      if (isset($this->configuration[$key]['table_fields']) && count($this->configuration[$key]['table_fields']) > 0) {
        $form[$key] = [
          '#type' => 'details',
          '#title' => $this->t($this->key_config[$key]['title']),
          '#description' => $this->t($this->key_config[$key]['description']),
          '#open' => TRUE,
        ];

        $form[$key]['table_fields'] = [
          '#type' => 'table',
          '#header' => $this->key_config['table_headers'],
          '#empty' => $this->t('There are no items yet. Add an item.'),
          '#tabledrag' => [
            [
              'action' => 'order',
              'relationship' => 'sibling',
              'group' => 'fields-order-weight',
            ],
          ],
        ];

        $table_fields = $this->configuration[$key]['table_fields'];
        $this->_uaSort($table_fields);

        $form = $this->generateTable($key, $table_fields, $form);

        unset($table_fields);
      }
    }

    $entityName = 'node';
    $entityType = '';
    $entityLimit = 4;
    $entityOffset = 0;

    //  Si viene desde ajax el carga los valores para el formilario
    if (get_class($form_state) == 'Drupal\Core\Form\SubformState') {
      $ourFormState = $form_state->getCompleteFormState();
    }
    $bnCargoDesdeAjax = FALSE;
    if (!empty((string)$ourFormState->getTriggeringElement()['#value'])) {
      if (strpos((string)$ourFormState->getTriggeringElement()['#name'], 'settings_files_table_fields_imag') !== FALSE) {
        $bnCargoDesdeAjax = TRUE;
      }
    }

    if ($bnCargoDesdeAjax) {
      $entityName = $ourFormState->getValue(['settings', 'entity', 'name']);
      $entityType = $ourFormState->getValue(['settings', 'entity', 'type']);
      $entityLimit = $ourFormState->getValue(['settings', 'entity', 'limit']);
      $entityOffset = $ourFormState->getValue(['settings', 'entity', 'offset']);
    }

    if (isset($this->configuration['entity'])) {
      $contentEntityTypes = [];
      $entityTypeDefinitions = $this->entityTypeManager->getDefinitions();
      /* @var $definition EntityTypeInterface */
      foreach ($entityTypeDefinitions as $definition) {
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
        $typesOfEntity = $this->entity_type_bundle_info->getBundleInfo($entityName);
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
          $entityLimit = (int)$this->configuration['entity']['limit'];
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
          $entityOffset = (int)$this->configuration['entity']['offset'];
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

      // Modo de presentación del contenido.
      $queryViewModes = $this->entityTypeManager
        ->getStorage('entity_view_display')
        ->getQuery();

      $resultsViewModes = $queryViewModes->execute();


      $condition = $entityName . '.' . $entityType;
      $optionsViewMode = [];

      foreach ($resultsViewModes as $result) {
        if (strpos($result, $condition) !== FALSE) {
          $formatResult = substr($result, strlen($condition) + 1);
          $optionsViewMode[$formatResult] = $this->t(ucwords($formatResult));
        }
      }

      $form['entity']['default_view_mode'] = [
        '#type' => 'select',
        '#options' => $optionsViewMode,
        '#description' => $this->t('Seleccionar el modo de presentación del contenido.'),
        '#title' => $this->t('Modo de presentación'),
        '#default_value' => isset($this->configuration['entity']['default_view_mode'])
          ? $this->configuration['entity']['default_view_mode']
          : '',
      ];

      if ($entityType !== "") {
        $url_add = Url::fromRoute('node.add', ['node_type' => $entityType], ['attributes' => ['target' => '_blank']]);
      } else {
        $url_add = Url::fromRoute('entity.' . $entityName . '.add_form', [], ['attributes' => ['target' => '_blank']]);
      }

      $form['entity']['add_entity'] = [
        '#type' => 'link',
        '#title' => $this->t('Añadir contenido'),
        '#url' => $url_add,
        '#attributes' => [
          'class' => ['button button-action button--primary button--small']
        ]
      ];

      $form['entity']['refresh_entity_table'] = [
        '#type' => 'button',
        '#value' => $this->t('Actualizar tabla'),
        '#attributes' => [
          'class' => ['button button-action button--second button--small']
        ],
        '#ajax' => [
          'callback' => [$this, 'changeEntityType'],
          'wrapper' => 'entity-content',
          'event' => 'click',
        ],
      ];
      $query = $this->entityTypeManager->getStorage($entityName)->getQuery('AND');
      $query->condition('status', 1);
      if ($entityType) {
        $query->condition('type', $entityType);
      }
      $query->range($entityOffset, $entityLimit + $entityOffset);
      $entityIds = $query->execute();

      $form['entity']['table-row'] = [
        '#type' => 'table',
        '#header' => [
          $this->t('Name'),
          $this->t('Description'),
          $this->t('Weight'),
          $this->t('Operations'),
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
        $entityStorage = $this->entityTypeManager->getStorage($entityName);
        $entity = $entityStorage->load($entityId);
        $label = $entity->label();
        $id = $entity->id();
        $resume = "";
        if (isset($entity->body) && isset($entity->body->summary)) { // verifica si body existe
          $resume = $entity->body->summary;
        }
        $weight = 1;
        if (isset($this->configuration['entity']['weight'][$id])) {
          $weight = (int)$this->configuration['entity']['weight'][$id];
        }

        if ($entityType !== "") {
          $url_edit = Url::fromRoute('entity.node.edit_form', ['node' => $id], ['attributes' => ['target' => '_blank']]);
        } else {
          $url_edit = Url::fromRoute('entity.' . $entityName . '.edit_form', ['service_product_bits' => $entityId], ['attributes' => ['target' => '_blank']]);
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
          'description' => [
            '#markup' => $resume,
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
          'operation' => [
            '#type' => 'link',
            '#title' => $this->t('Edit'),
            '#url' => $url_edit
          ]
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

    $this->logger->get('casa')->notice('form ajax');
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
          '#type' => 'textfield',
          '#title' => $this->t('Url'),
          '#default_value' => $entity['input']['link'],
          '#size' => 40,
          '#attributes' => [
            'pattern' => '(https?://|ftps?://|/)[^ :]+'
          ]
        ];

        $form[$key]['table_fields'][$id]['input']['label'] = [
          '#type' => 'textfield',
          '#title' => $this->t('Label'),
          '#default_value' => $entity['input']['label'],
          '#size' => 40,
        ];
      } else {
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
        if (isset($entity['max_length']) && $entity['max_length'] == 1) {
          $form[$key]['table_fields'][$id]['input']['#multiple'] = FALSE;
        } else {
          $form[$key]['table_fields'][$id]['input']['#multiple'] = TRUE;
        }
        if (isset($entity['upload_validators'])) {
          $form[$key]['table_fields'][$id]['input']['#upload_validators'] = $entity['upload_validators'];
        }
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
     $tags = str_replace("_","",$form['id']['#default_value']) ;
     $tags = str_replace('-',"", $tags);
    \Drupal::service('cache_tags.invalidator')->invalidateTags([$tags]);
    $this->configuration['header'] = $form_state->getValue('header');
    $this->configuration['body'] = $form_state->getValue('body');
    $this->configuration['files'] = $form_state->getValue('files');
    $this->configuration['entity'] = $form_state->getValue('entity');

    $arEntityIds = $form_state->getValues()['entity']['table-row'];
    foreach ((array) $arEntityIds as $id => $weight) { // (array) se agrega para validar que sea un arreglo y evitar error foreach
      $this->configuration['entity']['weight'][$id] = $weight['weight'];
    }

    $filesArray = [
      'header' => $this->configuration['header'],
      'body' => $this->configuration['body'],
      'files' => $this->configuration['files'],
    ];

    foreach ($filesArray as $item) {
      foreach ((array) $item['table_fields'] as $field) { // (array) se agrega para validar que sea un arreglo y evitar error foreach
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

    foreach ((array)$input['table_fields'] as $item) {
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

    $this->fileUsageBackend->add($file, 'adf_cards', 'adf_cards', 1);
  }

  private function _uaSort(&$array) {
    if (is_array($array)) {
      uasort($array, [
        'Drupal\Component\Utility\SortArray',
        'sortByWeightElement',
      ]);
    } elseif ($array === '') {
      $array = [];
    }
  }
}
