import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';


@Injectable({
    providedIn: 'root'
})

export class TitileService {

    constructor(private http: HttpService) {

    }
    getTitle() {
        return this.http.get('block-resources/5?_format=json');
    }
}
