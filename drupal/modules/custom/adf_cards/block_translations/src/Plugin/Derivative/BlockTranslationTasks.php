<?php

namespace Drupal\block_translations\Plugin\Derivative;

use Drupal\Component\Plugin\Derivative\DeriverBase;

/**
 * Defines block translations tasks.
 */
class BlockTranslationTasks extends DeriverBase {

  /**
   * {@inheritdoc}
   */
  public function getDerivativeDefinitions($base_plugin_definition) {
    $languages = \Drupal::languageManager()->getLanguages();
    $default = \Drupal::languageManager()->getDefaultLanguage()->getId();
    foreach ($languages as $key => $language) {
      if($key != $default){
      // Implement dynamic logic to provide values for the same keys as in example.links.task.yml.
        $this->derivatives['block_translations.tab_'.$key] = $base_plugin_definition;
        $this->derivatives['block_translations.tab_'.$key]['title'] = $language->getName();
        $this->derivatives['block_translations.tab_'.$key]['route_name'] = 'block_translations.form';
        $this->derivatives['block_translations.tab_'.$key]['route_parameters'] = array(
          'language' =>  $key,
        );
        $this->derivatives['block_translations.tab_'.$key]['parent_id'] = 'block_translations.tabs';
        $this->derivatives['block_translations.tab_'.$key]['deriver'] = '\Drupal\block_translations\Plugin\Derivative\BlockTranslationTasks';
       }
    }
    return $this->derivatives;
  }

}
