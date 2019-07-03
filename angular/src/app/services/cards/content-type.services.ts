import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';


@Injectable({
  providedIn: 'root'
})

export class ContentType {
  constructor(private http: HttpService) {
  }

  getContentTypeItems(typeOfContent) {
    const url = `v1/content-types/${typeOfContent}`;
    return this.http.get(url);
  }
}
