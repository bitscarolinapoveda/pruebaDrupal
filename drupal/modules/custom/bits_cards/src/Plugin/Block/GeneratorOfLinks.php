<?php

namespace Drupal\bits_cards\Plugin\Block;

use Drupal\Core\Form\FormStateInterface;
use Drupal\adf_cards\Plugin\Block\CardBase;

/**
 * Provides a 'GeneratorOfLinks' block.
 *
 * @Block(
 *  id = "Generator_links",
 *  admin_label = @Translation("Generator of links"),
 * )
 */
class GeneratorOfLinks extends CardBase {

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'body' => [
        'table_fields' => [
          'link' => [
            'type' => 'url',
            'title' => $this->t('Link'),
            'service_field' => 'link',
            'show' => 1,
            'weight' => 1,
            'max_length' => 100,
          ],
        ],
      ],
      'others' => [],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form = parent::blockForm($form, $form_state);
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    parent::blockSubmit($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    $build = parent::build();
    return $build;
  }

}
