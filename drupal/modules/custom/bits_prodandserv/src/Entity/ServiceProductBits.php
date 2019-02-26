<?php

namespace Drupal\bits_prodandserv\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;

/**
 * Defines the Service product bits entity.
 *
 * @ConfigEntityType(
 *   id = "service_product_bits",
 *   label = @Translation("Service product bits"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\bits_prodandserv\ServiceProductBitsListBuilder",
 *     "form" = {
 *       "add" = "Drupal\bits_prodandserv\Form\ServiceProductBitsForm",
 *       "edit" = "Drupal\bits_prodandserv\Form\ServiceProductBitsForm",
 *       "delete" = "Drupal\bits_prodandserv\Form\ServiceProductBitsDeleteForm"
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\bits_prodandserv\ServiceProductBitsHtmlRouteProvider",
 *     },
 *   },
 *   config_prefix = "service_product_bits",
 *   admin_permission = "administer site configuration",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *     "uuid" = "uuid"
 *   },
 *   links = {
 *     "canonical" = "/admin/structure/service_product_bits/{service_product_bits}",
 *     "add-form" = "/admin/structure/service_product_bits/add",
 *     "edit-form" = "/admin/structure/service_product_bits/{service_product_bits}/edit",
 *     "delete-form" = "/admin/structure/service_product_bits/{service_product_bits}/delete",
 *     "collection" = "/admin/structure/service_product_bits"
 *   }
 * )
 */
class ServiceProductBits extends ConfigEntityBase implements ServiceProductBitsInterface {

  /**
   * The Service product bits ID.
   *
   * @var string
   */
  protected $id;

  /**
   * The Service product bits label.
   *
   * @var string
   */
  protected $label;

  public $description;
  public $short_image;
  public $large_image;
  public $type;

  public function getValueJson($field, $defaultValue = "") {
    if ($field == "id") {
      return $this->id;
    }
    elseif ($field == "title") {
      return $this->title;
    }
    elseif ($field == "label") {
      return $this->label;
    }
    elseif ($field == "description") {
      return $this->description;
    }
    elseif ($field == "short_image") {
      $numImages = count($this->short_image);
      $data = [];
      for ($i = 0; $i < $numImages; $i++) {
        $data[] = $this->loadImageData($this->short_image[$i]);
      }
      return $data;
    }
    elseif ($field == "large_image") {
      $numImages = count($this->large_image);
      $data = [];
      for ($i = 0; $i < $numImages; $i++) {
        $data[] = $this->loadImageData($this->large_image[$i]);
      }
      return $data;
    }
    elseif ($field == "type") {
      return $this->id;
    }
    return $defaultValue;
  }

  private function loadImageData($image) {
    $file = \Drupal\file\Entity\File::load($image);
    return [
      'url' => file_create_url($file->getFileUri()),
      'alt' => $this->label(),
    ];
  }
}
