import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import {HttpService} from "../../../services/http/http.service";

declare var jQuery:any;
declare var $:any;


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent {
  constructor() { }
  
}
