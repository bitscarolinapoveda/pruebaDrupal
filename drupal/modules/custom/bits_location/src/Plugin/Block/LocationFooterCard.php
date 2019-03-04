<?php

namespace Drupal\bits_location\Plugin\Block;

use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'LocationFooterCard' block.
 *
 * @Block(
 *  id = "location_footer_card",
 *  admin_label = @Translation("Location footer card"),
 * )
 */
class LocationFooterCard extends CardBase
{

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'body'=>[
        'table_fields' => [
          'link_all_place' => [
            'type' => 'url',
            'title' => $this->t('Nuestras oficinas'),
            'input' => [
              'label' => $this->t('Ver todas nuestras oficinas'),
              'link' => '/contact-us'
            ],
            'service_field' => 'link_all_place',
            'show' => 1,
            'weight' => 1,
            'max_length' => 100,
          ],
        ],
      ],
      'files' => [
        'table_fields' => [
          'marker_img' => [
            'type' => 'managed_file',
            'title' => $this->t('Imagen del marcador'),
            'service_field' => 'image',
            'show' => 1,
            'weight' => 1,
            'max_length' => 1,
            'upload_validators'  => [
              'file_validate_extensions' => ['svg png jpg ico'],
            ],
          ],
        ],
      ],
      'entity' => [
        'name' => 'node',
        'type' => 'locations',
        'limit' => 6,
        'offset' => 0,
      ],
    ];
  }
}
