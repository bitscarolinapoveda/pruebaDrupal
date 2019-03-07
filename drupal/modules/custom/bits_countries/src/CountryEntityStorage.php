<?php

namespace Drupal\bits_countries;

use Drupal\Core\Entity\Sql\SqlContentEntityStorage;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Language\LanguageInterface;
use Drupal\bits_countries\Entity\CountryEntityInterface;

/**
 * Defines the storage handler class for Country entity entities.
 *
 * This extends the base storage class, adding required special handling for
 * Country entity entities.
 *
 * @ingroup bits_countries
 */
class CountryEntityStorage extends SqlContentEntityStorage implements CountryEntityStorageInterface {

  /**
   * {@inheritdoc}
   */
  public function revisionIds(CountryEntityInterface $entity) {
    return $this->database->query(
      'SELECT vid FROM {country_entity_revision} WHERE id=:id ORDER BY vid',
      [':id' => $entity->id()]
    )->fetchCol();
  }

  /**
   * {@inheritdoc}
   */
  public function userRevisionIds(AccountInterface $account) {
    return $this->database->query(
      'SELECT vid FROM {country_entity_field_revision} WHERE uid = :uid ORDER BY vid',
      [':uid' => $account->id()]
    )->fetchCol();
  }

  /**
   * {@inheritdoc}
   */
  public function countDefaultLanguageRevisions(CountryEntityInterface $entity) {
    return $this->database->query('SELECT COUNT(*) FROM {country_entity_field_revision} WHERE id = :id AND default_langcode = 1', [':id' => $entity->id()])
      ->fetchField();
  }

  /**
   * {@inheritdoc}
   */
  public function clearRevisionsLanguage(LanguageInterface $language) {
    return $this->database->update('country_entity_revision')
      ->fields(['langcode' => LanguageInterface::LANGCODE_NOT_SPECIFIED])
      ->condition('langcode', $language->getId())
      ->execute();
  }

}
