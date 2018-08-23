import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { error } from 'util';

@Injectable({
    providedIn: 'root'
})

export class CarouselService  {
    constructor(private http: HttpService) {

    }
    carouselArray: CarouselService[] = [];
    getsliderItems() {
        return this.http.get('content-types-resources?_format=json');
    }
}

