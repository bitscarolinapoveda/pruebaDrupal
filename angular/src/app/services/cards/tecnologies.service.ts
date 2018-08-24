import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
    providedIn: 'root'
})

export class TecnologiesService {
    constructor(private http: HttpService) {
    }

    getTecnologies() {
        return this.http.get('/block-resources/2?_format=json');
    }
}

