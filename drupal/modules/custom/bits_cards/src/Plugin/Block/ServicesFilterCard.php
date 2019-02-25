<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'ServicesFilterCard' block.
 *
 * @Block(
 *  id = "servicesfilter_card",
 *  admin_label = @Translation("ServicesFilter card"),
 * )
 */
class ServicesFilterCard extends CardBase {

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
            'input' => $this->t('Filtrar Servicios'),
            'service_field' => 'title',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'subtitle' => [
            'type' => 'textfield',
            'title' => $this->t('Subtítulo'),
            'service_field' => 'subtitle',
            'show' => 1,
            'weight' => 1,
          ],
        ],
      ],
      'body' => [
        'table_fields' => [
          'category_service' => [
            'type' => 'textfield',
            'title' => $this->t('Categoría de servicio'),
            'input' => $this->t('Categoría de servicio'),
            'service_field' => 'category_service',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'category_service_placeholder' => [
            'type' => 'textfield',
            'title' => $this->t('Placeholder de Categoría de servicio'),
            'input' => $this->t('Filtre por categoría'),
            'service_field' => 'category_service_placeholder',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'theme' => [
            'type' => 'textfield',
            'title' => $this->t('Tema'),
            'input' => $this->t('Tema'),
            'service_field' => 'theme',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'theme_placeholder' => [
            'type' => 'textfield',
            'title' => $this->t('Placeholder de Tema'),
            'input' => $this->t('Filtre por tema'),
            'service_field' => 'theme_placeholder',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'button' => [
            'type' => 'textfield',
            'title' => $this->t('Texto del botón'),
            'input' => $this->t('Ver todos los servicios'),
            'service_field' => 'button',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
        ],
      ],
      'others' => [],
    ];
  }

}
