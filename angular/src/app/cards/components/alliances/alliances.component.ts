import {CustomCardService} from './../../../services/cards/v1-card.services';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-alliances',
  templateUrl: './alliances.component.html',
  styleUrls: ['./alliances.component.scss']
})
export class AlliancesComponent implements OnInit {

  allianceTitle: any[];
  allianceArrayLogos: any[];
  allianceBackground: any[];

  constructor (
    private router: ActivatedRoute,
    private alliance: CustomCardService,
  ) {
    this.allianceBackground = [];
  }

  ngOnInit () {

    /* $ (function ($) {
      if ($('#transition-image2').length) {
          console.log('if')
          var items = 4;
          var $elements = $('.img-item2');

          var groups = createGroups($elements, items);
          var groups:{} = completeGroup(groups, items);

          //console.log($elements)
          startSlide(groups, items);
      }

      function createGroups($elements, numberItems) {
          var elems = {};
          var group = 1;
          var item = 0;
          elems[group] = [];

          $.each($elements, function(key, value) {
              var elemId = $(this).prop('id');
              elems[group][item] = elemId;
              item++;

              if (((key + 1) % numberItems) == 0) {
                  item = 0;
                  group++;
                  elems[group] = [];
              }
          });

          return elems;
      }

      function completeGroup(elems, numberItems) {
          $.each(elems, function(key, currentElem) {
              var count = 0;
              $.each(currentElem, function(k, v) {
                  count++;
              });

              if ((count % numberItems) > 0) {
                  var iter = numberItems - count;
                  var pos = count;
                  var c = 0;

                  $.each(elems, function(a, b) {
                      $.each(b, function(item, v) {
                          if (c < iter) {
                              elems[key][pos] = v;
                              pos++;
                          }
                          c++;
                      });
                  });
              }
          });

          $.each(elems, function(key, array) {
              array.sort(function(a, b){
                  if(a== b) return 0;
                  return a> b? 1: -1;
              });
          });

          return elems;
      }

      function startSlide(elems, numberItems) {
          var slide = 1;
          var itemSlide = 0;
          var oper = 'show';
          var interval = setInterval(function() {
              if (itemSlide < numberItems && oper == 'show') {
                  var elemId = elems[slide][itemSlide];
                  var $elem = $('#' + elemId);
                  $elem.addClass('fadeInUp displayed').removeClass('fadeOutUp no-displayed').css('display', 'block');
                  itemSlide++;
              }
              else {
                  oper = 'remove';
                  if (((itemSlide) % numberItems) == 0) {
                      itemSlide = 0;
                  }
                  var elemId = elems[slide][itemSlide];
                  var $elem = $('#' + elemId);
                  $elem.addClass('fadeOutUp').removeClass('fadeInUp');
                  itemSlide++;
                  if (itemSlide == numberItems) {
                      oper = 'show';
                      itemSlide = 0;
                      slide++;

                      if (elems[slide] == undefined) {
                          slide = 1;
                      }
                      $('.displayed').css('display', 'none').removeClass('displayed').addClass('no-displayed');
                  }
              }
          }, 500);
      }
    }); */
    this.getAlliance();
  }

  getAlliance () {
    this.alliance.getCustomCardInformation('ouralliance').subscribe(items => {
      this.allianceTitle = items.header[0].data;
      console.log('ALIANZAS: ', items);
      this.allianceBackground = items.body[0].data.back_movil[0];
      this.allianceArrayLogos = items.data;
      //this.allianceArrayLogos = items.files[0].data.logo;
    });
  }
}
