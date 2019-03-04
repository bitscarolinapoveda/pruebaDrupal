<?php

namespace Drupal\bits_countries\Controller;

use Drupal\Component\Utility\Xss;
use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Url;
use Drupal\bits_countries\Entity\CountryEntityInterface;

/**
 * Class CountryEntityController.
 *
 *  Returns responses for Country entity routes.
 */
class CountryEntityController extends ControllerBase implements ContainerInjectionInterface {

  /**
   * Displays a Country entity  revision.
   *
   * @param int $country_entity_revision
   *   The Country entity  revision ID.
   *
   * @return array
   *   An array suitable for drupal_render().
   */
  public function revisionShow($country_entity_revision) {
    $country_entity = $this->entityManager()->getStorage('country_entity')->loadRevision($country_entity_revision);
    $view_builder = $this->entityManager()->getViewBuilder('country_entity');

    return $view_builder->view($country_entity);
  }

  /**
   * Page title callback for a Country entity  revision.
   *
   * @param int $country_entity_revision
   *   The Country entity  revision ID.
   *
   * @return string
   *   The page title.
   */
  public function revisionPageTitle($country_entity_revision) {
    $country_entity = $this->entityManager()->getStorage('country_entity')->loadRevision($country_entity_revision);
    return $this->t('Revision of %title from %date', ['%title' => $country_entity->label(), '%date' => format_date($country_entity->getRevisionCreationTime())]);
  }

  /**
   * Generates an overview table of older revisions of a Country entity .
   *
   * @param \Drupal\bits_countries\Entity\CountryEntityInterface $country_entity
   *   A Country entity  object.
   *
   * @return array
   *   An array as expected by drupal_render().
   */
  public function revisionOverview(CountryEntityInterface $country_entity) {
    $account = $this->currentUser();
    $langcode = $country_entity->language()->getId();
    $langname = $country_entity->language()->getName();
    $languages = $country_entity->getTranslationLanguages();
    $has_translations = (count($languages) > 1);
    $country_entity_storage = $this->entityManager()->getStorage('country_entity');

    $build['#title'] = $has_translations ? $this->t('@langname revisions for %title', ['@langname' => $langname, '%title' => $country_entity->label()]) : $this->t('Revisions for %title', ['%title' => $country_entity->label()]);
    $header = [$this->t('Revision'), $this->t('Operations')];

    $revert_permission = (($account->hasPermission("revert all country entity revisions") || $account->hasPermission('administer country entity entities')));
    $delete_permission = (($account->hasPermission("delete all country entity revisions") || $account->hasPermission('administer country entity entities')));

    $rows = [];

    $vids = $country_entity_storage->revisionIds($country_entity);

    $latest_revision = TRUE;

    foreach (array_reverse($vids) as $vid) {
      /** @var \Drupal\bits_countries\CountryEntityInterface $revision */
      $revision = $country_entity_storage->loadRevision($vid);
      // Only show revisions that are affected by the language that is being
      // displayed.
      if ($revision->hasTranslation($langcode) && $revision->getTranslation($langcode)->isRevisionTranslationAffected()) {
        $username = [
          '#theme' => 'username',
          '#account' => $revision->getRevisionUser(),
        ];

        // Use revision link to link to revisions that are not active.
        $date = \Drupal::service('date.formatter')->format($revision->getRevisionCreationTime(), 'short');
        if ($vid != $country_entity->getRevisionId()) {
          $link = $this->l($date, new Url('entity.country_entity.revision', ['country_entity' => $country_entity->id(), 'country_entity_revision' => $vid]));
        }
        else {
          $link = $country_entity->link($date);
        }

        $row = [];
        $column = [
          'data' => [
            '#type' => 'inline_template',
            '#template' => '{% trans %}{{ date }} by {{ username }}{% endtrans %}{% if message %}<p class="revision-log">{{ message }}</p>{% endif %}',
            '#context' => [
              'date' => $link,
              'username' => \Drupal::service('renderer')->renderPlain($username),
              'message' => ['#markup' => $revision->getRevisionLogMessage(), '#allowed_tags' => Xss::getHtmlTagList()],
            ],
          ],
        ];
        $row[] = $column;

        if ($latest_revision) {
          $row[] = [
            'data' => [
              '#prefix' => '<em>',
              '#markup' => $this->t('Current revision'),
              '#suffix' => '</em>',
            ],
          ];
          foreach ($row as &$current) {
            $current['class'] = ['revision-current'];
          }
          $latest_revision = FALSE;
        }
        else {
          $links = [];
          if ($revert_permission) {
            $links['revert'] = [
              'title' => $this->t('Revert'),
              'url' => $has_translations ?
              Url::fromRoute('entity.country_entity.translation_revert', ['country_entity' => $country_entity->id(), 'country_entity_revision' => $vid, 'langcode' => $langcode]) :
              Url::fromRoute('entity.country_entity.revision_revert', ['country_entity' => $country_entity->id(), 'country_entity_revision' => $vid]),
            ];
          }

          if ($delete_permission) {
            $links['delete'] = [
              'title' => $this->t('Delete'),
              'url' => Url::fromRoute('entity.country_entity.revision_delete', ['country_entity' => $country_entity->id(), 'country_entity_revision' => $vid]),
            ];
          }

          $row[] = [
            'data' => [
              '#type' => 'operations',
              '#links' => $links,
            ],
          ];
        }

        $rows[] = $row;
      }
    }

    $build['country_entity_revisions_table'] = [
      '#theme' => 'table',
      '#rows' => $rows,
      '#header' => $header,
    ];

    return $build;
  }

}
