<?php

namespace Drupal\bits_countries\Entity;

use Drupal\Core\Entity\EntityStorageInterface;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\Entity\ContentEntityBase;
use Drupal\Core\Entity\EntityChangedTrait;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\user\UserInterface;

/**
 * Defines the City entity entity.
 *
 * @ingroup bits_countries
 *
 * @ContentEntityType(
 *   id = "city_entity",
 *   label = @Translation("City entity"),
 *   handlers = {
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\bits_countries\CityEntityListBuilder",
 *     "views_data" = "Drupal\bits_countries\Entity\CityEntityViewsData",
 *     "translation" = "Drupal\bits_countries\CityEntityTranslationHandler",
 *
 *     "form" = {
 *       "default" = "Drupal\bits_countries\Form\CityEntityForm",
 *       "add" = "Drupal\bits_countries\Form\CityEntityForm",
 *       "edit" = "Drupal\bits_countries\Form\CityEntityForm",
 *       "delete" = "Drupal\bits_countries\Form\CityEntityDeleteForm",
 *     },
 *     "access" = "Drupal\bits_countries\CityEntityAccessControlHandler",
 *     "route_provider" = {
 *       "html" = "Drupal\bits_countries\CityEntityHtmlRouteProvider",
 *     },
 *   },
 *   base_table = "city_entity",
 *   data_table = "city_entity_field_data",
 *   translatable = TRUE,
 *   admin_permission = "administer city entity entities",
 *   entity_keys = {
 *     "id" = "id",
 *     "label" = "name",
 *     "country_code" = "country_code",
 *     "uuid" = "uuid",
 *     "uid" = "user_id",
 *     "langcode" = "langcode",
 *     "status" = "status",
 *   },
 *   links = {
 *     "canonical" = "/admin/structure/city_entity/{city_entity}",
 *     "add-form" = "/admin/structure/city_entity/add",
 *     "edit-form" = "/admin/structure/city_entity/{city_entity}/edit",
 *     "delete-form" = "/admin/structure/city_entity/{city_entity}/delete",
 *     "collection" = "/admin/structure/city_entity",
 *   },
 *   field_ui_base_route = "city_entity.settings"
 * )
 */
class CityEntity extends ContentEntityBase implements CityEntityInterface {

  use EntityChangedTrait;

  /**
   * {@inheritdoc}
   */
  public static function preCreate(EntityStorageInterface $storage_controller, array &$values) {
    parent::preCreate($storage_controller, $values);
    $values += [
      'user_id' => \Drupal::currentUser()->id(),
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getName() {
    return $this->get('name')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setName($name) {
    $this->set('name', $name);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function getCountryCode() {
    return $this->get('country_code')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setCountryCode($country_code) {
    $this->set('country_code', $country_code);
    return $this;
  }
  /**
   * {@inheritdoc}
   */
  public function getLabelName() {
    return $this->get('label_name')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setLabelName($label_name) {
    $this->set('label_name', $label_name);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function getCreatedTime() {
    return $this->get('created')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setCreatedTime($timestamp) {
    $this->set('created', $timestamp);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function getOwner() {
    return $this->get('user_id')->entity;
  }

  /**
   * {@inheritdoc}
   */
  public function getOwnerId() {
    return $this->get('user_id')->target_id;
  }

  /**
   * {@inheritdoc}
   */
  public function setOwnerId($uid) {
    $this->set('user_id', $uid);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function setOwner(UserInterface $account) {
    $this->set('user_id', $account->id());
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function isPublished() {
    return (bool) $this->getEntityKey('status');
  }

  /**
   * {@inheritdoc}
   */
  public function setPublished($published) {
    $this->set('status', $published ? TRUE : FALSE);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public static function baseFieldDefinitions(EntityTypeInterface $entity_type) {
    $fields = parent::baseFieldDefinitions($entity_type);

    $fields['user_id'] = BaseFieldDefinition::create('entity_reference')
      ->setLabel(t('Authored by'))
      ->setDescription(t('The user ID of author of the City entity entity.'))
      ->setRevisionable(TRUE)
      ->setSetting('target_type', 'user')
      ->setSetting('handler', 'default')
      ->setTranslatable(TRUE)
      ->setDisplayOptions('view', [
        'label' => 'hidden',
        'type' => 'author',
        'weight' => 0,
      ])
      ->setDisplayOptions('form', [
        'type' => 'entity_reference_autocomplete',
        'weight' => 5,
        'settings' => [
          'match_operator' => 'CONTAINS',
          'size' => '60',
          'autocomplete_type' => 'tags',
          'placeholder' => '',
        ],
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE);

    $fields['name'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Name'))
      ->setDescription(t('The name of the City entity entity.'))
      ->setSettings([
        'max_length' => 50,
        'text_processing' => 0,
      ])
      ->setDefaultValue('')
      ->setDisplayOptions('view', [
        'label' => 'above',
        'type' => 'string',
        'weight' => -4,
      ])
      ->setDisplayOptions('form', [
        'type' => 'string_textfield',
        'weight' => -4,
      ])
      ->setDisplayConfigurable('form', TRUE)
      ->setDisplayConfigurable('view', TRUE)
      ->setRequired(TRUE);

    $fields['status'] = BaseFieldDefinition::create('boolean')
      ->setLabel(t('Publishing status'))
      ->setDescription(t('A boolean indicating whether the City entity is published.'))
      ->setDefaultValue(TRUE)
      ->setDisplayOptions('form', [
        'type' => 'boolean_checkbox',
        'weight' => -3,
      ]);

    $fields['created'] = BaseFieldDefinition::create('created')
      ->setLabel(t('Created'))
      ->setDescription(t('The time that the entity was created.'));

    $fields['changed'] = BaseFieldDefinition::create('changed')
      ->setLabel(t('Changed'))
      ->setDescription(t('The time that the entity was last edited.'));

    return $fields;
  }

}
