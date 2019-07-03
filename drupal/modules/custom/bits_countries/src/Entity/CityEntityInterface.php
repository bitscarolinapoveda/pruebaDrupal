<?php

namespace Drupal\bits_countries\Entity;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityChangedInterface;
use Drupal\user\EntityOwnerInterface;

/**
 * Provides an interface for defining City entity entities.
 *
 * @ingroup bits_countries
 */
interface CityEntityInterface extends ContentEntityInterface, EntityChangedInterface, EntityOwnerInterface {

  /*Add get/set methods for your configuration properties here.*/

  /**
   * Gets the City entity countryCode.
   *
   * @return string
   *   Name of the City entity.
   */
  public function getCountryCode();

  /**
   * Sets the City entity countryCode.
   *
   * @param string $countryCode
   *   The City entity countryCode.
   *
   * @return \Drupal\bits_countries\Entity\CityEntityInterface
   *   The called City entity entity.
   */
  public function setCountryCode($countryCode);
  /**
   * Gets the City entity countryCode.
   *
   * @return string
   *   Name of the City entity.
   */
  public function getName();

  /**
   * Sets the City entity name.
   *
   * @param string $name
   *   The City entity name.
   *
   * @return \Drupal\bits_countries\Entity\CityEntityInterface
   *   The called City entity entity.
   */
  public function setName($name);

  /**
   * Gets the City entity creation timestamp.
   *
   * @return int
   *   Creation timestamp of the City entity.
   */
  public function getCreatedTime();

  /**
   * Sets the City entity creation timestamp.
   *
   * @param int $timestamp
   *   The City entity creation timestamp.
   *
   * @return \Drupal\bits_countries\Entity\CityEntityInterface
   *   The called City entity entity.
   */
  public function setCreatedTime($timestamp);

  /**
   * Returns the City entity published status indicator.
   *
   * Unpublished City entity are only visible to restricted users.
   *
   * @return bool
   *   TRUE if the City entity is published.
   */
  public function isPublished();

  /**
   * Sets the published status of a City entity.
   *
   * @param bool $published
   *   TRUE to set this City entity to published, FALSE to set it to unpublished.
   *
   * @return \Drupal\bits_countries\Entity\CityEntityInterface
   *   The called City entity entity.
   */
  public function setPublished($published);

}
