<?php
namespace Drupal\bits_cards;

use Drupal\Core\DependencyInjection\ServiceProviderBase;
use Drupal\Core\DependencyInjection\ContainerBuilder;

class BitsCardsServiceProvider extends ServiceProviderBase{

	public function alter(ContainerBuilder $container) {

		$definition = $container->getDefinition('adf_cards.get_config');
		$definition->setClass('Drupal\bits_cards\BitsCardsOutputJsonCard');
	}
}