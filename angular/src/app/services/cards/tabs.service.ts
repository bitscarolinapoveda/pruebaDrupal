import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class TabsService {
  constructor(private http: HttpService) {}

    getTabs() {
        return this.http.get('/block-resources/6?_format=json');
    }
}


