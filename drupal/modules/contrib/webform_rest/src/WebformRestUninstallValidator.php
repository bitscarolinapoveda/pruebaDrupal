<?php

namespace Drupal\webform_rest;

use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\Core\Extension\ModuleUninstallValidatorInterface;
use Drupal\Core\StringTranslation\StringTranslationTrait;

/**
 * Prevents uninstallation of Webform REST module dependencies.
 */
class WebformRestUninstallValidator implements ModuleUninstallValidatorInterface {

  use StringTranslationTrait;

  /**
   * The filter entity storage.
   *
   * @var \Drupal\Core\Config\Entity\ConfigEntityStorageInterface
   */
  protected $config_factory;

  /**
   * Constructs a new WebformRestUninstallValidator.
   *
   * @param \Drupal\Core\Config\ConfigFactoryInterface $config_factory
   *   The config factory.
   */
  public function __construct(ConfigFactoryInterface $config_factory) {
    $this->config_factory = $config_factory;
  }

  /**
   * {@inheritdoc}
   */
  public function validate($module) {
    $reasons = [];

    // Prevent uninstall of File module if the file upload resource is in use.
    if ($module == 'file') {
      $config = $this->config_factory->getEditable('rest.resource.webform_rest_file_upload');

      $upload_resource_enabled = $config->get('status');

      if ($upload_resource_enabled) {
        $reasons[] = $this->t('Required by the following REST resource plugin: Webform File Upload');
      }
    }
    return $reasons;
  }

}
