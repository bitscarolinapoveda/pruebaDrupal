<?php

namespace Drupal\bits_countries\Entity;

use Drupal\Core\Config\Entity\ConfigEntityBase;

/**
 * Defines the Countries api entity entity.
 *
 * @ConfigEntityType(
 *   id = "countries_api_entity",
 *   label = @Translation("Countries api entity"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\bits_countries\CountriesApiEntityListBuilder",
 *     "form" = {
 *       "add" = "Drupal\bits_countries\Form\CountriesApiEntityForm",
 *       "edit" = "Drupal\bits_countries\Form\CountriesApiEntityForm",
 *       "delete" = "Drupal\bits_countries\Form\CountriesApiEntityDeleteForm"
 *     },
 *     "route_provider" = {
 *       "html" = "Drupal\bits_countries\CountriesApiEntityHtmlRouteProvider",
 *     },
 *   },
 *   config_prefix = "countries_api_entity",
 *   admin_permission = "administer site configuration",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "label",
 *     "url" = "url",
 *     "uuid" = "uuid"
 *   },
 *   links = {
 *     "canonical" = "/admin/structure/countries_api_entity/{countries_api_entity}",
 *     "add-form" = "/admin/structure/countries_api_entity/add",
 *     "edit-form" = "/admin/structure/countries_api_entity/{countries_api_entity}/edit",
 *     "delete-form" = "/admin/structure/countries_api_entity/{countries_api_entity}/delete",
 *     "collection" = "/admin/structure/countries_api_entity"
 *   }
 * )
 */
class CountriesApiEntity extends ConfigEntityBase implements CountriesApiEntityInterface {

  /**
   * The Countries api entity ID.
   *
   * @var string
   */
  protected $id;

  /**
   * The Countries api entity label.
   *
   * @var string
   */
  protected $label;

  /**
   * The Countries api entity label.
   *
   * @var string
   */
  public $url;

  public function getValueJson($field, $defaultValue = "") {
    if ($field == "id") {
      return $this->id;
    }
    elseif ($field == "label") {
      return $this->label;
    }
    elseif ($field == "url") {
      return $this->url;
    }
  }
}
