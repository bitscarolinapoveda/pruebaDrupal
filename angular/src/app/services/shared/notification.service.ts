import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { statusCodes } from './notification.messages';

@Injectable()
export class NotificationService {
  public toastOptions: any;

  constructor(public toastr: ToastrService) {
    this.toastOptions = {
      dismiss: 'click',
      showCloseButton: true,
      animate: 'flyRight',
      progressBar: 'true'
    };
  }

  public error (errorParam: string | Object) {
    if (typeof errorParam === 'string') {
      this.toastr.error( errorParam, 'Error' , this.toastOptions);
    } else {
      const error = this.convertObjectError(errorParam);
      this.toastr.error( error.message, error.label , this.toastOptions);
    }
  }

  public success(messageParam: string) {
    this.toastr.error( messageParam, 'Success' , this.toastOptions);
  }

  public warnig(messageParam: string) {
    this.toastr.error( messageParam, 'warning' , this.toastOptions);
  }

  private convertObjectError(error: any) {
    return statusCodes.find(x => x.code === error.code);
  }

}
