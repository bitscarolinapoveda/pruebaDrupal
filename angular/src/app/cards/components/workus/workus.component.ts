import { Http } from '@angular/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../../../services/http/http.service';
import { DataMessage } from '../message/message.component';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-workus',
  templateUrl: './workus.component.html',
  styleUrls: ['./workus.component.scss']
})
export class WorkusComponent implements OnInit {

  hidden = false;
  private _token: string;
  usuario: any = {
    nombre: null,
    email: null
  };
  dataMessage: DataMessage[];


  onSubmit(formulario) {
    this.dataMessage = [];
    console.log(formulario);
    formulario['webform_id'] = 'work_with_us';

    jQuery('#formulario_contacto')[0].reset();

    /* jQuery('#msj-modal').show();
    jQuery('.close').click(function () {
      jQuery('#msj-modal').hide();
    }); */

    this._http.post('webform_rest/submit?_format=json', formulario, { // Hace el submit del formulario a Drupal
      'Content-Type': 'application/json',
      'X-CSRF-Token': this._token
    })
      .subscribe(datos => {
        if (datos.error) {
          for (var key in datos.error) {
            this.dataMessage.push(
              {
                visible: true,
                status: 'error',
                message: datos.error[key]
              }
            );
          }
        } else if (datos.sid) {
          this.dataMessage.push(
            {
              visible: true,
              status: 'success',
              message: 'Respuesta satisfactoria'
            }
          );
        }
        // formulario.form.reset();
      });

  }
  constructor(private _http: HttpService) {
    this.dataMessage = [];
  }

  ngOnInit() {
    this._http.get('rest/session/token', {}, { responseType: 'text' }).subscribe((response) => {
      this._token = response;
    });
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }
}
