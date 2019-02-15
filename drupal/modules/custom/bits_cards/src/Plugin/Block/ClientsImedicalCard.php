<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'Imedical Clients' block.
 *
 * @Block(
 *  id = "imedical_clients",
 *  admin_label = @Translation("Imedical Clients"),
 * )
 */
class ClientsImedicalCard extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'header' => [
        'table_fields' => [
          'title' => [
            'type' => 'textfield',
            'title' => $this->t('Título'),
            'service_field' => 'title',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
        ],
      ],
      'body' => [
        'table_fields' => [
          'image' => [
            'type' => 'managed_file',
            'title' => $this->t('Imagen'),
            'service_field' => 'image',
            'show' => 1,
            'weight' => 1,
            'max_length' => 5,
          ],
        ],
      ],
      'entity' => [
        'name' => 'node',
        'type' => 'imedical_clients',
        'limit' => 6,
        'offset' => 0,
        'default_view_mode' => 'default',
        //el valor por defecto es 'default'. si cambia este valor tener en cuenta que el display mode debe existir para esta entidad.
      ],
      'others' => [],
    ];
  }

}
