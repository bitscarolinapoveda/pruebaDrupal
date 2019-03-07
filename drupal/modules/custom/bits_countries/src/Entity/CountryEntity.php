<?php

namespace Drupal\bits_countries\Entity;

use Drupal\Core\Entity\ContentEntityBase;
use Drupal\Core\Entity\EntityStorageInterface;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\Core\Entity\EntityChangedTrait;
use Drupal\Core\Entity\EntityTypeInterface;
use Drupal\user\UserInterface;

/**
 * Defines the Country entity entity.
 *
 * @ingroup bits_countries
 *
 * @ContentEntityType(
 *   id = "country_entity",
 *   label = @Translation("Country entity"),
 *   handlers = {
 *     "storage" = "Drupal\bits_countries\CountryEntityStorage",
 *     "view_builder" = "Drupal\Core\Entity\EntityViewBuilder",
 *     "list_builder" = "Drupal\bits_countries\CountryEntityListBuilder",
 *     "views_data" = "Drupal\bits_countries\Entity\CountryEntityViewsData",
 *     "translation" = "Drupal\bits_countries\CountryEntityTranslationHandler",
 *
 *     "form" = {
 *       "default" = "Drupal\bits_countries\Form\CountryEntityForm",
 *       "add" = "Drupal\bits_countries\Form\CountryEntityForm",
 *       "edit" = "Drupal\bits_countries\Form\CountryEntityForm",
 *       "delete" = "Drupal\bits_countries\Form\CountryEntityDeleteForm",
 *     },
 *     "access" = "Drupal\bits_countries\CountryEntityAccessControlHandler",
 *     "route_provider" = {
 *       "html" = "Drupal\bits_countries\CountryEntityHtmlRouteProvider",
 *     },
 *   },
 *   base_table = "country_entity",
 *   data_table = "country_entity_field_data",
 *   revision_table = "country_entity_revision",
 *   revision_data_table = "country_entity_field_revision",
 *   translatable = TRUE,
 *   admin_permission = "administer country entity entities",
 *   entity_keys = {
 *     "id" = "id",
 *     "revision" = "vid",
 *     "label" = "name",
 *     "uuid" = "uuid",
 *     "uid" = "user_id",
 *     "langcode" = "langcode",
 *     "status" = "status",
 *   },
 *   links = {
 *     "canonical" = "/admin/structure/country_entity/{country_entity}",
 *     "add-form" = "/admin/structure/country_entity/add",
 *     "edit-form" = "/admin/structure/country_entity/{country_entity}/edit",
 *     "delete-form" = "/admin/structure/country_entity/{country_entity}/delete",
 *     "version-history" = "/admin/structure/country_entity/{country_entity}/revisions",
 *     "revision" = "/admin/structure/country_entity/{country_entity}/revisions/{country_entity_revision}/view",
 *     "revision_revert" = "/admin/structure/country_entity/{country_entity}/revisions/{country_entity_revision}/revert",
 *     "revision_delete" = "/admin/structure/country_entity/{country_entity}/revisions/{country_entity_revision}/delete",
 *     "translation_revert" = "/admin/structure/country_entity/{country_entity}/revisions/{country_entity_revision}/revert/{langcode}",
 *     "collection" = "/admin/structure/country_entity",
 *   },
 *   field_ui_base_route = "country_entity.settings"
 * )
 */
class CountryEntity extends ContentEntityBase implements CountryEntityInterface {

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
  protected function urlRouteParameters($rel) {
    $uri_route_parameters = parent::urlRouteParameters($rel);

    return $uri_route_parameters;
  }

  /**
   * {@inheritdoc}
   */
  public function preSave(EntityStorageInterface $storage) {
    parent::preSave($storage);

    foreach (array_keys($this->getTranslationLanguages()) as $langcode) {
      $translation = $this->getTranslation($langcode);

      // If no owner has been set explicitly, make the anonymous user the owner.
      if (!$translation->getOwner()) {
        $translation->setOwnerId(0);
      }
    }
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
  public function getLabelName() {
    return $this->get('label_name')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setLabelName($name) {
    $this->set('label_name', $name);
    return $this;
  }

  /**
   * {@inheritdoc}
   */
  public function getIsoCode() {
    return $this->get('iso_code')->value;
  }

  /**
   * {@inheritdoc}
   */
  public function setIsoCode($isoCode) {
    $this->set('iso_code', $isoCode);
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
      ->setDescription(t('The user ID of author of the Country entity entity.'))
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
      ->setDescription(t('The name of the Country entity entity.'))
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

    $fields['label_name'] = BaseFieldDefinition::create('string')
      ->setLabel(t('Label name'))
      ->setDescription(t('The label name to show of the Country entity.'))
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

    $fields['iso_code'] = BaseFieldDefinition::create('string')
      ->setLabel(t('ISO Code'))
      ->setDescription(t('The ISO code of the Country entity.'))
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
      ->setDescription(t('A boolean indicating whether the Country entity is published.'))
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

    $fields['revision_translation_affected'] = BaseFieldDefinition::create('boolean')
      ->setLabel(t('Revision translation affected'))
      ->setDescription(t('Indicates if the last edit of a translation belongs to current revision.'))
      ->setReadOnly(TRUE)
      ->setTranslatable(TRUE);

    return $fields;
  }

}
