<?php

namespace Drupal\bits_cards\Services;

use Drupal\adf_cards\Services\ExportConfigCardService;
use Symfony\Component\HttpFoundation\Request;

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
  public function get(Request $request) {
    $block_id = $request->query->get('bid');
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
