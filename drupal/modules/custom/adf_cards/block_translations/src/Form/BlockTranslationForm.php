<?php

namespace Drupal\block_translations\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Language\LanguageInterface;
use Drupal\Core\Entity\EntityInterface;
use Drupal\block\Entity\Block;
use Drupal\Core\Url;

/**
 * Class BlockTranslationForm.
 */
class BlockTranslationForm extends FormBase {

  protected $langcode;
  protected $config_storage;
  protected $config_original;
  protected $name;

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'block_translation_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state, $block = NULL , $language = NULL) {
    //set variables
    //$this->langcode = \Drupal::languageManager()->getCurrentLanguage()->getId();
    $this->langcode = !empty($language) ?  $language->getId() : 'en' ;
    $this->name = 'block.block.'.$block;
    $collection = 'language.'.$this->langcode;

    //load the Storage object
    $this->config_storage = \Drupal::service('config.storage');
    // read the original config  object for this block
    $this->config_original = $this->config_storage->read($this->name);
    // create or load the language collection
    $this->config_storage = $this->config_storage->createCollection($collection);
    // read the config object for this block from language collection
    $this->config = $this->config_storage->read($this->name);

    // load block form
    if(!empty($block)){
      $entity = Block::load($block);
      if($this->config){
        $entity->set('settings', array_merge($entity->get('settings'), $this->config['settings']));
      }
      $block_form = \Drupal::service('entity.form_builder')->getForm($entity, 'default');
    }else{
      $block_form = [];
    }

    // set form the block settings
    $form = $block_form['settings'];
    $form['actions'] = array(
        '#type' => 'container',
      );
    $form['actions']['submit'] = array(
      '#type' => 'submit',
      '#value' => $this->t('Save Translation'),
      '#button_type' => 'primary',
    );
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    // cache clear for this block
    $tags = str_replace("block.block.","",$this->name) ;
    \Drupal::service('cache_tags.invalidator')->invalidateTags([$tags]);

    // if not exits translation for this block
    if($this->config === FALSE){
      $this->config = $this->config_original;
      $this->config['langcode'] = $this->langcode;
    }
    //$settings_values = $form_state->getValue('settings');
    $settings = $form_state->getUserInput()['settings'];
    $form_state->setValue('settings',$settings);
    $settings = $form_state->getValue('settings');
    if(!empty($settings)){
      $this->config['settings'] = array_merge($this->config['settings'], $settings);
      // Write to the config in the language collection.
      $status = $this->config_storage->write($this->name, $this->config);
      if($status){
        drupal_set_message(t('Successfully saved this block configuration.'));
      }
      else{
        drupal_set_message(t('Dont saved this block configuration.'),'error');
      }
    }
  }
}
