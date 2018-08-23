import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
    providedIn: 'root'
})

export class TecnologiesService {
    constructor(private http: HttpService) {}

    getTecnologies() {
        return this.http.get('/drupal/block-resources/1?_format=json');
    }
}

