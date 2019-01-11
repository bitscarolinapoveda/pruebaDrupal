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
  public map: any;
  public mobileScreen = false;
  public desktopScreen = false;
  public needButtons = false;
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
      if (items.length > 4) {
        this.needButtons = true;
      }
      this.lat = items[0].lat;
      this.lng = items[0].lng;
      this.titleCity = items[0].title;
      this.addressCity = items[0].address;
      this.locations_data = items;
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
  ubicateCity (ubicacion, index) {
    this.lat = parseFloat(ubicacion.lat);
    this.lng = parseFloat(ubicacion.lng);
    this.titleCity = ubicacion.title;
    this.addressCity = ubicacion.address;
    for (let i = 0; i < this.locations_data.length ; i++) {
      document.getElementById( i + '').style.backgroundColor = '#f2f4f6';
    }
    document.getElementById( index + '').style.backgroundColor = '#d9dfe4';
  }
  scrollMaps(direction) {
    const elem = document.getElementById('box-of-buttons');
    const scrollTop = elem.scrollTop;
    if (direction === 'down') {
      if (scrollTop === 0) {
        elem.scrollTo(0, 130);
      } else {
        document.getElementById('up-arrow').style.visibility = 'visible';
        elem.scrollTo(0, 130 + scrollTop);
      }
    } else if (direction === 'up') {
      if (scrollTop === 130) {
        elem.scrollTo(0, -130);
      } else {
        elem.scrollTo(0, -130 + scrollTop);
      }
    }
  }
}

