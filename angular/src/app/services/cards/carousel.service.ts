import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
    providedIn: 'root'
})

export class CarouselService  {
    constructor(private http: HttpService) {

    }
    carouselArray: CarouselService[] = [];
    getsliderItems() {
        return this.http.get('/v1/content-types/articles?_format=json');
    }
}

