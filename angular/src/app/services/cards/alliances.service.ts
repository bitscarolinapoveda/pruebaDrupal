import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})

export class AllianceService {

  constructor(private http: HttpService) {
    console.log('');
  }

  getAlliance() {
    return this.http.get('block-resources/3?_format=json');
  }
}
