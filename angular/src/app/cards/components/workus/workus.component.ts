import { Http } from '@angular/http';
import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../../../services/http/http.service';
import { DataMessage } from '../message/message.component';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { HttpClient } from '@angular/common/http';
import { SelectComponent } from 'ng2-select';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-workus',
  templateUrl: './workus.component.html',
  styleUrls: ['./workus.component.scss']
})
export class WorkusComponent implements OnInit {
  @ViewChild('paisWU') public ngSelectW: SelectComponent;
  @ViewChild('fileInput') hojavWS: ElementRef;

  hidden = false;
  private _token: string;
  usuario: any = {
    nombre: null,
    email: null
  };
  dataMessage: DataMessage[];
  titulo: string;
  list: any[];
  bandPais: Array<string>;
  listPais: Array<string>;
  pais: any;
  hojaWU: any;

  value: any = {};
  _disabledV: string;
  disabled: boolean;

  checked: boolean;

  form: FormGroup;
  file: any;

  onSubmit(formulario) {

    formulario['archivo_adjunto'] = this.file;

    this.dataMessage = [];
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
        this.ubicar();
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

          this.ngSelectW.active = [];
          this.pais = '';

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
  constructor(private _http: HttpService, private _service: CustomCardService, private http_pais: HttpClient, private fb: FormBuilder) {
    this.dataMessage = [];
    this.list = [];
    this.bandPais = [];
    this.listPais = [];
    this._disabledV = '0';
    this.disabled = false;
    this.pais = '';
    this.checked = false;
    this.form = this.fb.group({
      hojav: null
    });
    this.file = '';
    this.hojaWU = '';
  }

  ngOnInit() {
    this._http.get('rest/session/token', {}, { responseType: 'text' }).subscribe((response) => {
      this._token = response;
    });

    this.getPopoverService();

    this.getPaises();

    $(function () {
      $('[data-toggle="popover"]').popover(
        {
          html: true,
          title: function () {
            return $('#popover-title').html();
          },
          content: function () {
            return document.getElementById('#popover-content').innerHTML;

          }
        }
      ).click(function (e) {
        e.preventDefault();
      });
    });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
      this.form.get('hojav').setValue(this.file);
      this.hojaWU = this.file.name;
    }
  }

  verificaValidTouched(campo) {
    return !campo.valid && campo.touched;
  }

  getPopoverService() {
    this._service.getCustomContentBasicPage('c00ea48d-1ce3-4bba-b65e-d57daf71cf4a').subscribe(params => {
      this.titulo = params.title;
      this.list = params.body;
    });
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  ubicar() {
    const x = document.querySelector('.tab');
    if (x) {
      x.scrollIntoView({ block: 'start', inline: 'start', behavior: 'smooth' });
    }
  }

  getPaises() {
    this.http_pais.get<any[]>('https://restcountries.eu/rest/v2/all').subscribe(params => {
      for (let index = 0; index < params.length; index++) {
        this.bandPais.push(params[index].name);
      }
      this.listPais = this.bandPais;
    });
  }

  // Metodos del select
  private get disabledV(): string {
    return this._disabledV;
  }

  private set disabledV(value: string) {
    this._disabledV = value;
    this.disabled = this._disabledV === '1';
  }

  public selectedPais(value: any): void {
    this.pais = value.text;
  }

  public removedPais(value: any): void {
    this.pais = '';
  }

  public typedPais(value: any): void {
  }

  public refreshValuePais(value: any): void {
    this.pais = value.text;
  }
}
