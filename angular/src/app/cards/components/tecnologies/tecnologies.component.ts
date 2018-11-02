import { CustomCardService } from './../../../services/cards/v1-card.services';
import { Component, OnInit } from '@angular/core';


declare var $: any;
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.scss']
})
export class TecnologiesComponent implements OnInit {
  tecnologiesArrayLogos: any = [];
  tecnologiesTitle: any = [];
  tecnologiesback: any = [];
  tecnologiesMovil: any = [];
  tecnologiesDesktop: any = [];
  constructor(
    private _tecnologies: CustomCardService,
  ) {}

  ngOnInit() {
    this.getItemsTecnologies();
    // this.testFunction();


  }

  getItemsTecnologies() {
    return this._tecnologies.getCustomCardInformation('technologies').subscribe(items => {
      console.log(items);
      this.tecnologiesTitle = items.header[0].data;
      this.tecnologiesMovil = items.body[0].data.back_movil[0];
      this.tecnologiesDesktop = items.body[0].data.back_desktop[0];
      this.tecnologiesArrayLogos = items.files[0].data.logo;
    });
  }
/*
  testFunction(){
  setTimeout(function () {

    console.log('function')
    if ($('#transition-image').length > 0 ){
        var items = 4;
        var $elements = $('.img-item');
        console.log($('.img-item'));
        var groups = createGroups($elements, items);
        var groups: {} = completeGroup(groups, items);
      console.log(groups)
        startSlide(groups, items);
    }

    function createGroups($elements, numberItems) {
      var elems = {};
      var group = 1;
      var item = 0;
      elems[group] = [];

      $.each($elements, function (key, value) {
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
      $.each(elems, function (key, currentElem) {
        var count = 0;
        $.each(currentElem, function (k, v) {
            count++;
        });

        if ((count % numberItems) > 0) {
          var iter = numberItems - count;
          var pos = count;
          var c = 0;

          $.each(elems, function (a, b) {
            $.each(b, function (item, v) {
              if (c < iter) {
                elems[key][pos] = v;
                pos++;
              }
              c++;
            });
          });
        }
      });

      $.each(elems, function (key, array) {
        array.sort(function (a, b) {
          if (a == b) return 0;
          return a > b ? 1 : -1;
        });
      });

      return elems;
    }
    function startSlide(elems, numberItems) {
      console.log(elems)
      console.log(numberItems)

        var slide = 1;
        var itemSlide = 0;
        var oper = 'show';
        var interval = setInterval(function () {
            if (itemSlide < numberItems && oper == 'show') {
              console.log('if')
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
    }, 2000);

  }
*/
}
