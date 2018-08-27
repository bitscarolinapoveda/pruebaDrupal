import { Component, OnInit } from '@angular/core';
import { TecnologiesService } from '../../../services/cards/tecnologies.service';
declare var $: any;
@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.scss']
})
export class TecnologiesComponent implements OnInit {
    tecnologiesArray: any = [];
    tecnologiesTitle: any = [];
    tecnologiesback: any = [];
    tecnologiesmovil: any = [];
    constructor( private _tecnologies: TecnologiesService ) {}
    ngOnInit() {
        this.getItemsTecnologies();
         $ (function ($) {
      if ($('#transition-image').length) {
          var items = 4;
          var $elements = $('.img-item');

          var groups = createGroups($elements, items);
          var groups:{} = completeGroup(groups, items);
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
    });
    }

    getItemsTecnologies() {
        return this._tecnologies.getTecnologies().subscribe(items => {
            this.tecnologiesmovil = items.data.back_movil;
            this.tecnologiesTitle = items.data;
            this.tecnologiesback = items.data.background;
            this.tecnologiesArray = items.data.logo;
            //console.log(this.tecnologiesback);
        });
    }
}
