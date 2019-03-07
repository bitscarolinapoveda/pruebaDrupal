<?php

namespace Drupal\bits_countries;

use Drupal\Core\Entity\ContentEntityStorageInterface;
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
interface CountryEntityStorageInterface extends ContentEntityStorageInterface {

  /**
   * Gets a list of Country entity revision IDs for a specific Country entity.
   *
   * @param \Drupal\bits_countries\Entity\CountryEntityInterface $entity
   *   The Country entity entity.
   *
   * @return int[]
   *   Country entity revision IDs (in ascending order).
   */
  public function revisionIds(CountryEntityInterface $entity);

  /**
   * Gets a list of revision IDs having a given user as Country entity author.
   *
   * @param \Drupal\Core\Session\AccountInterface $account
   *   The user entity.
   *
   * @return int[]
   *   Country entity revision IDs (in ascending order).
   */
  public function userRevisionIds(AccountInterface $account);

  /**
   * Counts the number of revisions in the default language.
   *
   * @param \Drupal\bits_countries\Entity\CountryEntityInterface $entity
   *   The Country entity entity.
   *
   * @return int
   *   The number of revisions in the default language.
   */
  public function countDefaultLanguageRevisions(CountryEntityInterface $entity);

  /**
   * Unsets the language for all Country entity with the given language.
   *
   * @param \Drupal\Core\Language\LanguageInterface $language
   *   The language object.
   */
  public function clearRevisionsLanguage(LanguageInterface $language);

}
