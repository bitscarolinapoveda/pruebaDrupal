<?php

namespace Drupal\bits_countries;

use Drupal\Core\Entity\EntityAccessControlHandler;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Access\AccessResult;

/**
 * Access controller for the City entity entity.
 *
 * @see \Drupal\bits_countries\Entity\CityEntity.
 */
class CityEntityAccessControlHandler extends EntityAccessControlHandler {

  /**
   * {@inheritdoc}
   */
  protected function checkAccess(EntityInterface $entity, $operation, AccountInterface $account) {
    /** @var \Drupal\bits_countries\Entity\CityEntityInterface $entity */
    switch ($operation) {
      case 'view':
        if (!$entity->isPublished()) {
          return AccessResult::allowedIfHasPermission($account, 'view unpublished city entity entities');
        }
        return AccessResult::allowedIfHasPermission($account, 'view published city entity entities');

      case 'update':
        return AccessResult::allowedIfHasPermission($account, 'edit city entity entities');

      case 'delete':
        return AccessResult::allowedIfHasPermission($account, 'delete city entity entities');
    }

    // Unknown operation, no opinion.
    return AccessResult::neutral();
  }

  /**
   * {@inheritdoc}
   */
  protected function checkCreateAccess(AccountInterface $account, array $context, $entity_bundle = NULL) {
    return AccessResult::allowedIfHasPermission($account, 'add city entity entities');
  }

}
