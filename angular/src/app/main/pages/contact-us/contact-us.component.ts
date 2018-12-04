import {ChangeDetectorRef, Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {DynamicFormModel, DynamicFormService} from "@ng-dynamic-forms/core";
import {FormGroup} from "@angular/forms";
import {HttpService} from "../../../services/http/http.service";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
  private _subscription: Subscription;


  public formModel: DynamicFormModel;
  public formGroup: FormGroup;
  public loaded;

  private _json: any[];
  private _token: string;

  constructor (
    private router: Router,
    private _http: HttpService,
    private formService: DynamicFormService,
    private _cd: ChangeDetectorRef
  ) {
    this._subscription = router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) {
            element.scrollIntoView(true); //En caso de venir un fragmen, hacer scroll al elemento.
          }
        }
      }
    });
    this._json = [];
    this.loaded = false;
  }

  ngOnInit () {
    //Obtiene el token apropiado para el contexto actual
    this._http.get('rest/session/token', {}, {responseType: 'text'}).subscribe((response) => {
      this._token = response;
    });

    //Obtiene la información de los fields del Webform
    this._http.get('webform_rest/contact_us/fields?_format=json').subscribe((response) => {
      this.createJson(response);

      this.formModel = this.formService.fromJSON(this._json);
      this.formGroup = this.formService.createFormGroup(this.formModel);

      this.loaded = true;
      this._cd.detectChanges(); //Sino, da error de Angular, ver: https://www.sitepoint.com/change-detection-angular/
    });
  }

  public ngOnDestroy () {
    this._subscription.unsubscribe();
  }

  public submitForm () {
    if (!this.formGroup.valid)
      return false;

    let json = {
      'webform_id': 'contact_us'
    };
    for (let key in this.formModel) {
      let field: any = this.formModel[key];
      let field_name = field.id.replace('contact_us--', '');
      json[field_name] = field.value;
    }

    this._http.post('webform_rest/submit?_format=json', json, { //Hace el submit del formulario a Drupal
      'Content-Type': 'application/json',
      'X-CSRF-Token': this._token
    }).subscribe((response) => {
      //response trae el submission id, o json de error si es el caso
    });

    console.log('SUBMIT: ', json);
    return false;
  }

  /***
   * Convierte el json a un objeto que pueda interpretarse apropiadamente por DynamicForms
   * @param json
   */
  createJson (json) {
    for (let attr in json) {
      if (!attr.startsWith('#')) {
        let item = json[attr];
        if (item['#type'] === 'webform_flexbox') { //Si es un contenedor
          this.eachFlexBox(item);
        } else {
          this.processField(item);
        }
      }
    }
  }

  /***
   * Recorre un contenedor "flexbox"
   * @param data
   */
  eachFlexBox (data) {
    for (let attr in data) {
      if (!attr.startsWith('#')) {
        let item = data[attr];
        if (item['#type'] !== 'webform-flexbox') {
          this.processField(item);
        }
      }
    }
  }

  /***
   * Crea un objeto a partir del field
   * @param data
   */
  processField (data) {
    let obj = {
      'type': this.getType(data['#type']),
      'id': data['#webform_id'],
      'label': data['#title'],
      'placeholder': data['#placeholder'] || '',
      'required': data['#required'] || false,
      errorMessages: {
        required: "{{ label }} es obligatorio."
      }
    };

    if (data['#type'] === 'webform_terms_of_service') {
      obj['terms'] = data['#terms_content'];
    }
    if (['SELECT'].indexOf(obj['type']) > -1) {
      obj['options'] = [];
      for (let label in data['#options']) {
        obj['options'].push({'label': label, value: data['#options'][label]});
      }
    }

    this._json.push(obj);
  }

  /***
   * Devuelve el tipo apropiado para usar en DynamicForms
   * @param drupalType
   */
  getType (drupalType) {
    switch (drupalType) {
      case 'textarea':
      case 'select':
        return drupalType.toUpperCase();
      case 'webform_autocomplete':
        return 'SELECT';
      case 'webform_terms_of_service':
        return 'CHECKBOX';
      default:
        return 'INPUT';
    }
  }
}