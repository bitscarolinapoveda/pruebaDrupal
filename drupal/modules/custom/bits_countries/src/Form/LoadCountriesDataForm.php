<?php

namespace Drupal\bits_countries\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\bits_countries\Entity\CountryEntity;
/**
 * Class LoadCountriesDataForm.
 */
class LoadCountriesDataForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  protected function getEditableConfigNames() {
    return [
      'bits_countries.loadcountriesdata',
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'load_countries_data_form';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('bits_countries.loadcountriesdata');
    $form['countries_file'] = [
      '#type' => 'file',
      '#title' => $this->t('Countries file'),
      '#description' => $this->t('File with coutries data in txt'),
      '#default_value' => $config->get('countries_file'),
      '#upload_location' => 'translations://',
      '#attributes' => ['class' => ['file-import-input']],
    ];
    $form['cities_file'] = [
      '#type' => 'file',
      '#title' => $this->t('Cities file'),
      '#description' => $this->t('File with cities information in txt'),
      '#default_value' => $config->get('cities_file'),
      '#upload_location' => 'translations://',
      '#attributes' => ['class' => ['file-import-input']],
    ];
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function validateForm(array &$form, FormStateInterface $form_state) {

    parent::validateForm($form, $form_state);
    $all_files = $this->getRequest()->files->get('files', []);
    if (!empty($all_files['countries_file'])) {
      /**
       * @var $file_upload \Symfony\Component\HttpFoundation\File\UploadedFile
       */
      $file_upload = $all_files['countries_file'];
      if ($file_upload->isValid()) {
        $form_state->setValue('countries_file', $file_upload->getRealPath());
        return;
      }
    }

    $form_state->setErrorByName('countries_file', $this->t('The file could not be uploaded.'));
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    parent::submitForm($form, $form_state);

    $this->config('bits_countries.loadcountriesdata')
      ->set('countries_file', $form_state->getValue('countries_file'))
      ->set('cities_file', $form_state->getValue('cities_file'))
      ->save();

    $data = file_get_contents($form_state->getValue('countries_file'));
    $array_rows = explode("\r",$data);
    $CC_ISO = array_search("CC_ISO",explode("\t",$array_rows[0]));
    $COUNTRY_NAME = array_search("COUNTRY_NAME",explode("\t",$array_rows[0]));

    for($i = 1; $i<count($array_rows); $i++) {
      $row = explode("\t",$array_rows[$i] );
      $entity = CountryEntity::create(
        [
          "name" => $row[$COUNTRY_NAME],
          "label_name" => $row[$COUNTRY_NAME],
          "iso_code" => $row[$CC_ISO],
        ]
      );
      $entity->save();
    }
  }

}
