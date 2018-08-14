<?php

namespace Drupal\adf_cards\Command;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Drupal\Console\Core\Command\Command;
use Drupal\Console\Annotations\DrupalCommand;
use Drupal\Console\Utils\Validator;
use Drupal\Console\Core\Utils\StringConverter;
use Drupal\Console\Core\Generator\GeneratorInterface;

/**
 * Class CreateCardCommand.
 *
 * @DrupalCommand (
 *     extension="adf_cards",
 *     extensionType="module"
 * )
 */
class CreateCardCommand extends Command {

  /**
   * Drupal\Console\Core\Generator\GeneratorInterface definition.
   *
   * @var \Drupal\Console\Core\Generator\GeneratorInterface
   */
  protected $generator;

  /**
   * Constructs a new CreateCardCommand object.
   */
  public function __construct(GeneratorInterface $adf_cards_adf_cards_create_card_generator) {
    $this->generator = $adf_cards_adf_cards_create_card_generator;
    parent::__construct();
  }

  /**
   * {@inheritdoc}
   */
  protected function configure() {
    $this
      ->setName('adf_cards:create_card')
      ->setDescription($this->trans('Command to create a card'))
      ->addOption(
                'module',
                NULL,
                InputOption::VALUE_REQUIRED,
                $this->trans('commands.adf_cards.create_card.options.module')
            )
      ->addOption(
               'class',
                NULL,
                InputOption::VALUE_REQUIRED,
                $this->trans('commands.adf_cards.create_card.options.class')
            )
      ->addOption(
                'label',
                NULL,
                InputOption::VALUE_REQUIRED,
                $this->trans('commands.adf_cards.create_card.options.label')
            )
      ->addOption(
                'plugin-id',
                NULL,
                InputOption::VALUE_REQUIRED,
                $this->trans('commands.adf_cards.create_card.options.plugin-id')
            );
  }

  /**
   * {@inheritdoc}
   */
  protected function interact(InputInterface $input, OutputInterface $output) {
    $this->getIo()->info('interact');

    $module = $input->getOption('module');
    if (!$module) {
      $module = $this->getIo()->ask(
                $this->trans('Module'),
                StringConverter::camelCaseToHuman($module)
            );
      $input->setOption('module', $module);
    }

    $class = $input->getOption('class');
    if (!$class) {
      $class = $this->getIo()->ask(
               $this->trans('Class'),
                'DefaultBlock',
                $class
            );
      $input->setOption('class', $class);
    }

    $label = $input->getOption('label');
    if (!$label) {
      $label = $this->getIo()->ask(
                $this->trans('Label'),
                StringConverter::camelCaseToHuman($class)
            );
      $input->setOption('label', $label);
    }

    $pluginId = $input->getOption('plugin-id');
    if (!$pluginId) {
      $pluginId = $this->getIo()->ask(
                $this->trans('Plugin-id'),
                StringConverter::camelCaseToUnderscore($class)
            );
      $input->setOption('plugin-id', $pluginId);
    }
  }

  /**
   * {@inheritdoc}
   */
  protected function execute(InputInterface $input, OutputInterface $output) {
    $this->getIo()->info('execute');
    $this->getIo()->info($this->trans('commands.adf_cards.create_card.messages.success'));
    $module = $input->getOption('module');
    $class_name = $input->getOption('class');
    $label = $input->getOption('label');
    $plugin_id = $input->getOption('plugin-id');
    $this->generator->generate([
      'module' => $module,
      'class_name' => $class_name,
      'label' => $label,
      'plugin_id' => $plugin_id,
    ]);
  }

}
