import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {



  hidden = false;
  
    usuario: any = {
      nombre: null,
      email: null
    };
    
 toogleHidden(){
   this.hidden = !this.hidden;
 }

  onSubmit(formulario) { 
    console.log(formulario);

    this.http.post('http://localhost/webform_rest/submit?_format=json', JSON.stringify(formulario.value))
    .subscribe(datos => {
      console.log(datos);
      formulario.form.reset();
    });
}
constructor(private http: Http) { }

ngOnInit() {
 
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
