<?php

namespace Drupal\bits_newsletter\Entity;

use Drupal\Core\Entity\ContentEntityInterface;
use Drupal\Core\Entity\EntityChangedInterface;
use Drupal\user\EntityOwnerInterface;

/**
 * Provides an interface for defining Newsletter entity entities.
 *
 * @ingroup bits_newsletter
 */
interface NewsletterEntityInterface extends ContentEntityInterface, EntityChangedInterface, EntityOwnerInterface {

  // Add get/set methods for your configuration properties here.

  /**
   * Gets the Newsletter entity name.
   *
   * @return string
   *   Name of the Newsletter entity.
   */
  public function getName();

  /**
   * Sets the Newsletter entity name.
   *
   * @param string $name
   *   The Newsletter entity name.
   *
   * @return \Drupal\bits_newsletter\Entity\NewsletterEntityInterface
   *   The called Newsletter entity entity.
   */
  public function setName($name);
  // Add get/set methods for your configuration properties here.

  /**
   * Gets the Newsletter entity name.
   *
   * @return string
   *   Name of the Newsletter entity.
   */
  public function getLastName();

  /**
   * Sets the Newsletter entity name.
   *
   * @param string $last_name
   *   The Newsletter entity name.
   *
   * @return \Drupal\bits_newsletter\Entity\NewsletterEntityInterface
   *   The called Newsletter entity entity.
   */
  public function setLastName($last_name);

  /**
   * Gets the Newsletter entity name.
   *
   * @return string
   *   Name of the Newsletter entity.
   */
  public function getEmail();

  /**
   * Sets the Newsletter entity name.
   *
   * @param string $email
   *   The Newsletter entity email.
   *
   * @return \Drupal\bits_newsletter\Entity\NewsletterEntityInterface
   *   The called Newsletter entity entity.
   */
  public function setEmail($email);

  /**
   * Gets the Newsletter entity creation timestamp.
   *
   * @return int
   *   Creation timestamp of the Newsletter entity.
   */
  public function getCreatedTime();

  /**
   * Sets the Newsletter entity creation timestamp.
   *
   * @param int $timestamp
   *   The Newsletter entity creation timestamp.
   *
   * @return \Drupal\bits_newsletter\Entity\NewsletterEntityInterface
   *   The called Newsletter entity entity.
   */
  public function setCreatedTime($timestamp);

  /**
   * Returns the Newsletter entity published status indicator.
   *
   * Unpublished Newsletter entity are only visible to restricted users.
   *
   * @return bool
   *   TRUE if the Newsletter entity is published.
   */
  public function isPublished();

  /**
   * Sets the published status of a Newsletter entity.
   *
   * @param bool $published
   *   TRUE to set this Newsletter entity to published, FALSE to set it to unpublished.
   *
   * @return \Drupal\bits_newsletter\Entity\NewsletterEntityInterface
   *   The called Newsletter entity entity.
   */
  public function setPublished($published);

}
