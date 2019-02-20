import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { ContactUsComponent } from 'src/app/main/pages/contact-us/contact-us.component';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from "../../../services/http/http.service";

declare var jQuery:any;
declare var $:any;

@Component({
    selector: 'app-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.scss']
})

export class TabsComponent implements OnInit {
    hidden = false;
    private _token: string;
    usuario: any = {
    nombre: null,
    email: null
    };

  constructor(private _http: HttpService) { }

  toogleHidden(){
    this.hidden = !this.hidden;
  }

  onSubmit(formulario) {
    console.log(formulario);
    formulario['webform_id'] = 'contact_us';
    $("#formulario_contacto")[0].reset();
    
    
    $("#msj-modal").show();
    $(".close").click(function() {
      $("#msj-modal").hide()
    });

    this._http.post('webform_rest/submit?_format=json', formulario, { //Hace el submit del formulario a Drupal
      'Content-Type': 'application/json',
      'X-CSRF-Token': this._token
    })
    .subscribe(datos => {
      console.log(datos);
      formulario.form.reset();
    });
  }

  ngOnInit() {
    this._http.get('rest/session/token', {}, {responseType: 'text'}).subscribe((response) => {
      this._token = response;
    });

    $(".trabaje").on('click',function(){
      $(".trabaje button").toggleClass("active");
      $(".contactenos button").toggleClass("active");
    });
    $(".contactenos").on('click', function(){
      $(".trabaje button").toggleClass("active");
          $(".contactenos button").toggleClass("active")
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

//     arrayTabs:Tab[] = [];
//     ids:number = 0;
//     size:number;
    
//     constructor(
//         private https: CustomCardService,
//     ) {}

//     ngOnInit() {

//     }

//     mostrar(link:number){
//         this.ids = link;
//         console.log(this.ids);
//     }
// }

// export interface Tab{
//     titulo:string;
//     icontab:string;
//     urlicon:string;
//     alticon:string;
//     contenido:string;
// }
