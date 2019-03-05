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
  public $modules;
  public $left_media;
  public $technologies;
  public $testimonies;
  public $achievements;
  public $team;
  public $right_media;
  public $video;
  public $clients;

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
      return $this->loadImagesData($this->short_image);
    }
    elseif ($field == "large_image") {
      return $this->loadImagesData($this->large_image);
    }
    elseif ($field == "type") {
      return $this->type;
    }
    elseif ($field == "modules") {
      return $this->loadMultiplesDataWithLabel($this->modules);
    }
    elseif ($field == "left_media") {
      return $this->loadDataWithLabel($this->left_media);
    }
    elseif ($field == "technologies") {
      return $this->loadMultiplesDataWithLabel($this->technologies);
    }
    elseif ($field == "testimonies") {
      return $this->loadMultiplesDataWithLabel($this->testimonies);
    }
    elseif ($field == "achievements") {
      return $this->loadMultiplesDataWithLabel($this->achievements);
    }
    elseif ($field == "team") {
      return $this->loadMultiplesDataWithLabel($this->team);
    }
    elseif ($field == "right_media") {
      return $this->loadDataWithLabel($this->right_media);
    }
    elseif ($field == "video") {
      return $this->loadDataWithLabel($this->video);
    }
    elseif ($field == "clients") {
      return $this->loadMultiplesDataWithLabel($this->clients);
    }
    return $defaultValue;
  }

  private function loadMultiplesDataWithLabel($ourentities) {
    $result = [];
    foreach ($ourentities as $key => $value) {
      $nid = $value['target_id'];
      $result[] = $this->loadDataWithLabel($nid);
    }
    return $result;
  }

  private function loadDataWithLabel($nid) {
    $node = \Drupal::entityTypeManager()->getStorage('node')->load($nid);
    if ($node) {
      return [
        'id' => $nid,
        'label' => $node->label()
      ];
    }
    return [
      'id' => is_null($nid) ? '' : $nid,
      'label' => ''
    ];
  }



  private function loadImagesData($images) {
    $data = [];
    $haveData = FALSE;

    foreach ($images as $image) {
      if ($image) {
        $file = \Drupal\file\Entity\File::load($image);
        if ($file) {
          $data[] = [
            'url' => file_create_url($file->getFileUri()),
            'alt' => $this->label(),
          ];
          $haveData = TRUE;
        }
      }
    }

    if (!$haveData) {
      $data[] = [
        'url' => '',
        'alt' => ''
      ];
    }

    return $data;
  }

}
