import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../../services/http/http.service';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
declare var $: any;

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  public zoom: boolean;
  public items = [];
  public title: string;
  public imageIcon = {
    url: '/assets/icon/iconBitsLocationMarker.svg',
    scaledSize: {
      width: 40,
      height: 66
    }
  };
  public closeOthers = true;
  public infoWindowOpen = true;
  public locations_data: any;
  public cant_locations_data: boolean;
  public lat: number = 0;
  public lng: number = 0;
  public titleCity;
  public addressCity;
  public telephoneCity;
  public colorWhileLoad = 'rgb(202, 202, 202)';
  public map: any;
  public mobileScreen = false;
  public desktopScreen = false;
  public needButtons = false;
  public widthOftheMap;
  public defaultZoomMap = 15;
  public seeMoreText = true;
  public seeLessText;
  public bitsTypeMap: any = [
    {
      featureType: 'road.highway',
      stylers: [
        {
          color: '#a1ff4a'
        },
        {
          saturation: 100
        },
        {
          lightness: 10
        },
        {
          visibility: 'simplified'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#3f9eff'
        }
      ]
    }
  ];

  constructor(
    private _http: HttpService,
    private service: CustomCardService
  ) {
    this.locations_data = [];
    this.cant_locations_data = false;
    this.zoom = false;
  }
  ngOnInit() {
    this.service.getCustomCardInformation('locationcard_2').subscribe((params) => {
      this.title = params.header[0].data.title;
      for (let index = 0; index < params.data.length; index++) {
        const value = params.data[index].field_location.split(',');
        this.items[index] = { lat: '', lon: '', title: '', field_address: '', field_telephone: '' };
        this.items[index].lat = parseFloat(value[0].trim());
        this.items[index].lng = parseFloat(value[1].trim());
        this.items[index].title = params.data[index].title;
        this.items[index].field_address = params.data[index].field_address;
        this.items[index].field_telephone = params.data[index].field_telephone;
      }
      if (params.data.length > 4) {
        this.needButtons = true;
      }
      this.lat = this.items[0].lat;
      this.lng = this.items[0].lng;
      this.titleCity = this.items[0].title;
      this.addressCity = this.items[0].field_address;
      this.telephoneCity = this.items[0].field_telephone;
      this.locations_data = this.items;
      if (this.locations_data.length < 3 ) {
        $('#acordion-info').addClass('one-item');
      } else {
        $('#acordion-info').addClass('more-item');
      }
      if (this.locations_data.length < 4) {
        this.cant_locations_data = true;
      } else {
        this.cant_locations_data = false;
      }

    });
    this.onResize(screen);
  }
  onResize(screen) {
    const widthScreen = (window.innerWidth);
    if (widthScreen < 1164) {
      this.mobileScreen = true;
      this.desktopScreen = false;
    } else {
      this.mobileScreen = false;
      this.desktopScreen = true;
    }
    if (screen === 'desktop') {
      this.sizeOfMap();
    }
  }
  sizeOfMap() {
    if (document.readyState === 'complete') {
      const widthOfDiv = document.querySelector('.map-location-desktop').clientWidth + 'px';
      this.widthOftheMap = widthOfDiv;
    } else {
      return false;
    }
  }
  ubicateCity(ubicacion, index) {
    this.lat = parseFloat(ubicacion.lat);
    this.lng = parseFloat(ubicacion.lng);
    this.titleCity = ubicacion.title;
    this.addressCity = ubicacion.field_address;
    this.telephoneCity = ubicacion.field_telephone;
    for (let i = 0; i < this.locations_data.length; i++) {
      document.getElementById(i + '').style.backgroundColor = '#f2f4f6';
    }
    document.getElementById(index + '').style.backgroundColor = '#d9dfe4';
  }
  scrollMaps(direction, devices) {
    if (devices === 'mobile') {
      if (this.locations_data.length < 3) {
        $('.accordion .card:last-of-type').addClass('padding-off');
      } else {
        $('.accordion .card:last-of-type').addClass('padding-on');
      }
      if (this.seeMoreText === true) {
        this.seeMoreText = false;
        this.seeLessText = true;
        $('#acordion-info').removeClass('see-more-true');
        $('#acordion-info').addClass('auto-height');
        $('.see-more-button .fa-sort-down').css({
          'padding-bottom': '5px',
          'transform': 'rotate(180deg)'
        });
      } else if (this.seeMoreText === false) {
        this.seeMoreText = true;
        this.seeLessText = false;
        this.checkHeight();
        $('.see-more-button .fa-sort-down').css({
          'padding-bottom': '0px',
          'transform': 'rotate(0deg)'
        });
      }
    } else if (devices === 'desktop') {
      const elem = document.getElementById('box-of-buttons');
      const scrollTop = elem.scrollTop;
      if (direction === 'down') {
        if (scrollTop === 0) {
          elem.scrollTo(0, 121);
        } else {
          document.getElementById('up-arrow').style.visibility = 'visible';
          elem.scrollTo(0, 121 + scrollTop);
        }
      } else if (direction === 'up') {
        if (scrollTop === 121) {
          elem.scrollTo(0, -121);
        } else {
          elem.scrollTo(0, -121 + scrollTop);
        }
      }
    }
  }

  mostrarZoom() {
    if (this.zoom === false) {
      this.zoom = true;
      $('.map-location-desktop').removeClass('zoom-map');
    } else if (this.zoom === true) {
      this.zoom = false;
      $('.map-location-desktop').addClass('zoom-map');
    }

  }

  ocultarZoom() {
    $('.map-location-desktop').addClass('zoom-map');
  }

  checkHeight() {
    if (this.locations_data.length > 3) {
      $(':host /deep/ .accordion .card:last-of-type').css('padding-bottom','49px');
      for (let i = 0; i < $('.acordion-info.locations .card button').length; i++) {
        if ($('#static-' + i + '-header button').hasClass('collapsed')) {
          if (this.seeMoreText === false) {
            $('#acordion-info').removeClass('see-more-true');
            $('#acordion-info').addClass('auto-height');
          } else {
            $('#acordion-info').removeClass('auto-height');
            $('#acordion-info').addClass('see-more-true');
          }
        } else {
          if (this.seeMoreText === false) {
            $('#acordion-info').removeClass('see-more-true');
            $('#acordion-info').addClass('auto-height');
            break;
          } else {
            if (!$('#static-0-header button').hasClass('collapsed') || !$('#static-1-header button').hasClass('collapsed')) {
              $('#acordion-info').removeClass('see-more-true');
              $('#acordion-info').removeClass('auto-height');
            } else {
              $('#acordion-info').addClass('see-more-true');
              $('#acordion-info').removeClass('auto-height');
            }
          }
        }
      }
    }
  }
}
