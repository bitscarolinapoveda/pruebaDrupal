import { Injectable } from '@angular/core';
import { errorsCode } from './notification.messages';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() {}

  public error(errorParam: string | Object) {
    console.log ('hola error');
    if (typeof errorParam === 'string') {
     // console.log(errorParam);
    } else {

      const error = this.convertObjectError(errorParam);
      const objError = errorsCode.find(x => x.code === error.code);

      if (objError !== void 0 || objError !== null) {
       //console.log('objError' + objError.message);

      } else {
        if (error.message !== void 0 || error.message !== null || error.message.length === 0 ) {
          // console.log(error.message);
        } else {
          // console.log('error');
        }
      }
    }

  }

  public success(message: string) {
    console.log(message);
  }

  public warnig(message) {
    console.log(message);
  }

  private convertObjectError(error: any) {
      return {code: 1001, message: 'data'};
  }

}
