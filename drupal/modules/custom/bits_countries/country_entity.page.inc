<?php

/**
 * @file
 * Contains country_entity.page.inc.
 *
 * Page callback for Country entity entities.
 */

use Drupal\Core\Render\Element;

/**
 * Prepares variables for Country entity templates.
 *
 * Default template: country_entity.html.twig.
 *
 * @param array $variables
 *   An associative array containing:
 *   - elements: An associative array containing the user information and any
 *   - attributes: HTML attributes for the containing element.
 */
function template_preprocess_country_entity(array &$variables) {
  // Fetch CountryEntity Entity Object.
  $country_entity = $variables['elements']['#country_entity'];

  // Helpful $content variable for templates.
  foreach (Element::children($variables['elements']) as $key) {
    $variables['content'][$key] = $variables['elements'][$key];
  }
}
