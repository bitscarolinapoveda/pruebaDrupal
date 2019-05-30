import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TextService {
  protected baseUrl = environment.apiUrl;
  constructor() { }

  public filterHtml(data) {
    data = data.replace(new RegExp('/sites/default/files/', 'g'), this.baseUrl + 'sites/default/files/');
    return data;
  }
}
