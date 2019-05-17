import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import { CustomCardService } from '../cards/v1-card.services';

@Injectable({
  providedIn: 'root'
})
export class HnResolverService implements Resolve<Observable<any>> {

  constructor(private _service: CustomCardService) { }

  resolve() {
    const language = this._service.getValidationLanguage();
    return of(language);
  }
}
