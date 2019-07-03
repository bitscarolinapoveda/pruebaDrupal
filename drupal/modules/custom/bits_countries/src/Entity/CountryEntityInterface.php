<?php

namespace Drupal\bits_countries\Entity;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityChangedInterface;
use Drupal\user\EntityOwnerInterface;

/**
 * Provides an interface for defining Country entity entities.
 *
 * @ingroup bits_countries
 */
interface CountryEntityInterface extends ContentEntityInterface, EntityChangedInterface, EntityOwnerInterface {

  /*Add get/set methods for your configuration properties here.*/

  /**
   * Gets the Country entity name.
   *
   * @return string
   *   Name of the Country entity.
   */
  public function getName();

  /**
   * Sets the Country entity name.
   *
   * @param string $name
   *   The Country entity name.
   *
   * @return \Drupal\bits_countries\Entity\CountryEntityInterface
   *   The called Country entity entity.
   */
  public function setName($name);


  /**
   * Gets the Country entity name.
   *
   * @return string
   *   Name of the Country entity.
   */
  public function getLabelName();

  /**
   * Sets the Country entity label name.
   *
   * @param string $labelName
   *   The Country entity label name.
   *
   * @return \Drupal\bits_countries\Entity\CountryEntityInterface
   *   The called Country entity entity.
   */
  public function setLabelName($labelName);

  /**
   * Gets the Country entity creation timestamp.
   *
   * @return int
   *   Creation timestamp of the Country entity.
   */
  public function getCreatedTime();

  /**
   * Sets the Country entity creation timestamp.
   *
   * @param int $timestamp
   *   The Country entity creation timestamp.
   *
   * @return \Drupal\bits_countries\Entity\CountryEntityInterface
   *   The called Country entity entity.
   */
  public function setCreatedTime($timestamp);

  /**
   * Returns the Country entity published status indicator.
   *
   * Unpublished Country entity are only visible to restricted users.
   *
   * @return bool
   *   TRUE if the Country entity is published.
   */
  public function isPublished();

  /**
   * Sets the published status of a Country entity.
   *
   * @param bool $published
   *   TRUE to set this Country entity to published, FALSE to set it to unpublished.
   *
   * @return \Drupal\bits_countries\Entity\CountryEntityInterface
   *   The called Country entity entity.
   */
  public function setPublished($published);

}
