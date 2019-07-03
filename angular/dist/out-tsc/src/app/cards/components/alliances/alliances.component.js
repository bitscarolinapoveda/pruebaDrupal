"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var v1_card_services_1 = require("./../../../services/cards/v1-card.services");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var AlliancesComponent = /** @class */ (function () {
    function AlliancesComponent(router, alliance) {
        this.router = router;
        this.alliance = alliance;
        this.allianceBackground = null;
    }
    AlliancesComponent.prototype.ngOnInit = function () {
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
    };
    AlliancesComponent.prototype.getAlliance = function () {
        var _this = this;
        this.alliance.getCustomCardInformation('ouralliance').subscribe(function (items) {
            _this.allianceTitle = items.header[0].data;
            _this.allianceBackground = items.body[0].data.back_movil[0];
            _this.allianceArrayLogos = items.data;
            //this.allianceArrayLogos = items.files[0].data.logo;
        });
    };
    AlliancesComponent = __decorate([
        core_1.Component({
            selector: 'app-alliances',
            templateUrl: './alliances.component.html',
            styleUrls: ['./alliances.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            v1_card_services_1.CustomCardService])
    ], AlliancesComponent);
    return AlliancesComponent;
}());
exports.AlliancesComponent = AlliancesComponent;
//# sourceMappingURL=alliances.component.js.map