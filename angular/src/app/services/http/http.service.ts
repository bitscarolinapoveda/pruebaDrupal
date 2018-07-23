import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { NotificationService } from '../shared/notification.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable({
  providedIn: 'root'
})
export class HttpService extends BaseService {

  constructor( protected _http: HttpClient, protected _notificationService: NotificationService) {
    super();
  }

   public get(url: string) {
     return this._http.get(this.baseUrl + url).pipe().catch(this.errorHandler);
   }

   public errorHandler (resp, caugh: Observable<any>): any {
    const error = JSON.parse(JSON.stringify(resp));
    this._notificationService.error(error.error.message);
    return Observable.throw( resp );
   }
}
