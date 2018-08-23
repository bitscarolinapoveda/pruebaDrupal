import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';


@Injectable({
  providedIn: 'root'
})

export class GeneratorOfLinksService {

  constructor(private http: HttpService) {
  }

  getGeneratorOfLinks() {
    return this.http.get('v1/card/config/generatoroflinks/export?_format=json');
  }
}