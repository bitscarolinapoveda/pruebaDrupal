<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'SuccessCaseFilterCard' block.
 *
 * @Block(
 *  id = "successcasefilter_card",
 *  admin_label = @Translation("SuccessCaseFilter card"),
 * )
 */
class SuccessCaseFilterCard extends CardBase {

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
            'input' => $this->t('Filtrar casos de éxito'),
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
          'client' => [
            'type' => 'textfield',
            'title' => $this->t('Cliente'),
            'input' => $this->t('Cliente'),
            'service_field' => 'client',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'client_placeholder' => [
            'type' => 'textfield',
            'title' => $this->t('Placeholder de Cliente'),
            'input' => $this->t('Filtre por cliente'),
            'service_field' => 'client_placeholder',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'sector' => [
            'type' => 'textfield',
            'title' => $this->t('Sector'),
            'input' => $this->t('Sector'),
            'service_field' => 'sector',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],'sector_placeholder' => [
            'type' => 'textfield',
            'title' => $this->t('Placeholder de Sector'),
            'input' => $this->t('Filtre por sector'),
            'service_field' => 'sector_placeholder',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'tecnology' => [
            'type' => 'textfield',
            'title' => $this->t('Tecnología'),
            'input' => $this->t('Tecnología'),
            'service_field' => 'tecnology',
            'show' => 1,
            'weight' => 1,
            'max_length' => 50,
          ],
          'tecnology_placeholder' => [
            'type' => 'textfield',
            'title' => $this->t('Placeholder de Tecnología'),
            'input' => $this->t('Filtre por tecnología'),
            'service_field' => 'tecnology_placeholder',
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
          'see_all_projects' => [
            'type' => 'textfield',
            'title' => $this->t('Ver todos los proyectos'),
            'input' => $this->t('Ver todos los proyectos'),
            'service_field' => 'see_all_projects',
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
