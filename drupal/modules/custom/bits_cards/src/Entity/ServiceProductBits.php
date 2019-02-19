<?php

namespace Drupal\bits_cards\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;

/**
 * Defines the Service product bits entity.
 *
 * @ConfigEntityType(
 *   id = "service_product_bits",
 *   label = @Translation("Service product bits"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\bits_cards\ServiceProductBitsListBuilder",
 *     "form" = {
 *       "add" = "Drupal\bits_cards\Form\ServiceProductBitsForm",
 *       "edit" = "Drupal\bits_cards\Form\ServiceProductBitsForm",
 *       "delete" = "Drupal\bits_cards\Form\ServiceProductBitsDeleteForm"
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\bits_cards\ServiceProductBitsHtmlRouteProvider",
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
}
