<?php

namespace Drupal\adf_cards\Generator;

use Drupal\Console\Core\Generator\Generator;
use Drupal\Console\Core\Generator\GeneratorInterface;

/**
 * Class CreateCardGenerator.
 *
 * @package Drupal\Console\Generator
 */
class CreateCardGenerator extends Generator implements GeneratorInterface {

  /**
   * {@inheritdoc}
   */
  public function generate(array $parameters) {
    $module = $parameters['module'];
    $class = $parameters['class_name'];

    $this->renderFile(
      'custom/card.php.twig',
      "modules/custom/$module/src/Plugin/Block/$class.php",
      $parameters
    );
  }

}
