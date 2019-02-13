import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-workus',
  templateUrl: './workus.component.html',
  styleUrls: ['./workus.component.scss']
})
export class WorkusComponent implements OnInit {

  usuario: any = {
    nombre: null,
    email: null
  };
  

onSubmit(formulario) { 
  console.log(formulario);

}
constructor(private http: Http) { }

ngOnInit() {

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
