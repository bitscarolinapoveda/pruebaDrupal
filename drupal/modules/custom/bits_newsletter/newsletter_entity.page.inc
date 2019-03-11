<?php

/**
 * @file
 * Contains newsletter_entity.page.inc.
 *
 * Page callback for Newsletter entity entities.
 */

use Drupal\Core\Render\Element;

/**
 * Prepares variables for Newsletter entity templates.
 *
 * Default template: newsletter_entity.html.twig.
 *
 * @param array $variables
 *   An associative array containing:
 *   - elements: An associative array containing the user information and any
 *   - attributes: HTML attributes for the containing element.
 */
function template_preprocess_newsletter_entity(array &$variables) {
  // Fetch NewsletterEntity Entity Object.
  $newsletter_entity = $variables['elements']['#newsletter_entity'];

  // Helpful $content variable for templates.
  foreach (Element::children($variables['elements']) as $key) {
    $variables['content'][$key] = $variables['elements'][$key];
  }
}
