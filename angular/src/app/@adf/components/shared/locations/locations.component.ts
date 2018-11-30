import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../../../services/http/http.service";

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  public locations_data: any;

  public lat: number;
  public lng: number;
  public map: any;

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
      this.locations_data = items;
    });
  }

  mapReady (map) {
    this.map = map;
  }

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

