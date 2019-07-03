<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'MediaImedicalCard' block.
 *
 * @Block(
 *  id = "media_imedical_card",
 *  admin_label = @Translation("Media imedical card"),
 * )
 */
class MediaImedicalCard extends CardBase
{

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
          'internal_menu_title' => [
            'type' => 'textfield',
            'title' => $this->t('Título menú interno'),
            'service_field' => 'internal_menu_title',
            'show' => 1,
            'weight' => 1,
            'max_length' => 25,
          ],
        ],
      ],
      'body' => [],
      'entity' => [
        'name' => 'node',
        'type' => 'imedical_media',
        'limit' => 5,
        'offset' => 0,
      ],
      'others' => [],
    ];
  }

}
