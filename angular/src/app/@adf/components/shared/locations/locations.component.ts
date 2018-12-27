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
  public locations_data: any;
  public lat: number;
  public lng: number;
  public map: any;
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
    //Coordenadas de Bogotá
    this.lat = 4.6097102;
    this.lng = -74.081749;
  }

  ngOnInit () {
    //Se conecta direcamente con el módulo adf_location en Drupal
    this._http.get('/location-resources').subscribe((items) => {
      for (let index = 0; index < items.length; index++) {
        items[index].lat = parseFloat(items[index].lat);
        items[index].lng = parseFloat(items[index].lng);
      }
      this.locations_data = items;
    });
  }

  // mapReady (map) {
  //   this.map = map;
  // }

  /***
   * Al hacer click en una ubicación, la "centra" en el mapa
   * @param lat
   * @param lng
   */
  setCenter (lat, lng) {
    let pos = {lat: parseFloat(lat), lng: parseFloat(lng)};
    this.map.setCenter(pos);
    this.map.setZoom(15);
  }
}

