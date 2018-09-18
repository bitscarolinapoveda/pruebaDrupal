import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class BannerService {
    constructor(private http: HttpService) {

    }
    getBanner() {
        return this.http.get('block-resources/4?_format=json');
    }
}

