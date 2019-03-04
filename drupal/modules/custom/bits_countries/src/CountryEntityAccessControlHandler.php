<?php

namespace Drupal\bits_countries;

use Drupal\Core\Entity\EntityAccessControlHandler;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Access\AccessResult;

/**
 * Access controller for the Country entity entity.
 *
 * @see \Drupal\bits_countries\Entity\CountryEntity.
 */
class CountryEntityAccessControlHandler extends EntityAccessControlHandler {

  /**
   * {@inheritdoc}
   */
  protected function checkAccess(EntityInterface $entity, $operation, AccountInterface $account) {
    /** @var \Drupal\bits_countries\Entity\CountryEntityInterface $entity */
    switch ($operation) {
      case 'view':
        if (!$entity->isPublished()) {
          return AccessResult::allowedIfHasPermission($account, 'view unpublished country entity entities');
        }
        return AccessResult::allowedIfHasPermission($account, 'view published country entity entities');

      case 'update':
        return AccessResult::allowedIfHasPermission($account, 'edit country entity entities');

      case 'delete':
        return AccessResult::allowedIfHasPermission($account, 'delete country entity entities');
    }

    // Unknown operation, no opinion.
    return AccessResult::neutral();
  }

  /**
   * {@inheritdoc}
   */
  protected function checkCreateAccess(AccountInterface $account, array $context, $entity_bundle = NULL) {
    return AccessResult::allowedIfHasPermission($account, 'add country entity entities');
  }

}
