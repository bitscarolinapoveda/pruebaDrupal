<?php

namespace Drupal\bits_cards\Services;

use Drupal\block\Entity\Block;
use Drupal\file\Entity\File;
use Drupal\adf_cards\Services\ExportConfigCardService;

/**
 * Provides a resource to get view modes by entity and bundle.
 */
class ExportContactConfigCardService {
  protected $adfConfig;

  /**
   * CurrentInvoiceService constructor.
   */
  public function __construct(ExportConfigCardService $adf_config) {
    $this->adfConfig = $adf_config;
  }

  /**
   * {@inheritdoc}
   */
  public function get() {
    $block_id = \Drupal::request()->query->get('bid');
    $generalSetting = $this->adfConfig->get($block_id);
    $others = array_values($generalSetting['others']['steps']);
    $othersResponse = [];

    foreach ($others as $item) {
      $aux = [
        'name' => $item['description'],
        'url' => $item['link']['url'],
        'class' => $item['link']['text'],
      ];
      $othersResponse[] = $aux;
    }

    $generalSetting['others'] = $othersResponse;

    return $generalSetting;
  }

}
