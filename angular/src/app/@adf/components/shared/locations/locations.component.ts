import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../../../services/http/http.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  public imageIcon = '/assets/icon/iconBitsLocationMarker.svg';
  public closeOthers = true;
  public infoWindowOpen = true;
  public locations_data: any;
  public lat: number;
  public lng: number;
  public titleCity;
  public addressCity;
  public colorWhileLoad = 'rgb(202, 202, 202)';
  public selected;
  public map: any;
  public mobileScreen = false;
  public desktopScreen = false;
  public widthOftheMap;
  public defaultZoomMap = 15;
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

  constructor (
    private _http: HttpService,
  ) {
    this.locations_data = [];
    this.infoWindowOpen = true;
  }
  ngOnInit () {
    this._http.get('/location-resources').subscribe((items) => {
      for (let index = 0; index < items.length; index++) {
        items[index].lat = parseFloat(items[index].lat);
        items[index].lng = parseFloat(items[index].lng);
      }
      this.lat = items[0].lat;
      this.lng = items[0].lng;
      this.titleCity = items[0].title;
      this.addressCity = items[0].address;
      this.locations_data = items;
    });
    this.onResize();
  }
  onResize() {
    const widthScreen = (window.innerWidth);
    if (widthScreen < 1164) {
      this.mobileScreen = true;
      this.desktopScreen = false;
    } else {
      this.mobileScreen = false;
      this.desktopScreen = true;
    }
    this.sizeOfMap();
  }
  sizeOfMap() {
    if (document.readyState === 'complete') {
      const widthOfDiv = document.querySelector('.map-location-desktop').clientWidth + 'px';
      this.widthOftheMap = widthOfDiv;
    } else {
    return false;
    }
  }
  ubicateCity (ubicacion, index) {
    this.lat = parseFloat(ubicacion.lat);
    this.lng = parseFloat(ubicacion.lng);
    this.titleCity = ubicacion.title;
    this.addressCity = ubicacion.address;
    this.selected = 'selected';
    console.log(index);
  }
  scrollMaps() {
    document.querySelector('.row.location-button').scrollIntoView();
  }
}

