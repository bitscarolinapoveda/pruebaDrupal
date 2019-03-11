<?php

namespace Drupal\bits_newsletter;

use Drupal\Core\Entity\EntityAccessControlHandler;
use Drupal\Core\Entity\EntityInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\Access\AccessResult;

/**
 * Access controller for the Newsletter entity entity.
 *
 * @see \Drupal\bits_newsletter\Entity\NewsletterEntity.
 */
class NewsletterEntityAccessControlHandler extends EntityAccessControlHandler {

  /**
   * {@inheritdoc}
   */
  protected function checkAccess(EntityInterface $entity, $operation, AccountInterface $account) {
    /** @var \Drupal\bits_newsletter\Entity\NewsletterEntityInterface $entity */
    switch ($operation) {
      case 'view':
        if (!$entity->isPublished()) {
          return AccessResult::allowedIfHasPermission($account, 'view unpublished newsletter entity entities');
        }
        return AccessResult::allowedIfHasPermission($account, 'view published newsletter entity entities');

      case 'update':
        return AccessResult::allowedIfHasPermission($account, 'edit newsletter entity entities');

      case 'delete':
        return AccessResult::allowedIfHasPermission($account, 'delete newsletter entity entities');
    }

    // Unknown operation, no opinion.
    return AccessResult::neutral();
  }

  /**
   * {@inheritdoc}
   */
  protected function checkCreateAccess(AccountInterface $account, array $context, $entity_bundle = NULL) {
    return AccessResult::allowedIfHasPermission($account, 'add newsletter entity entities');
  }

}
