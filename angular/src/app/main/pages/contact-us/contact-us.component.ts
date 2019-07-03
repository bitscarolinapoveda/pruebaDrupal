import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

declare var $: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
    if (window.location.pathname === '/contactenos' || window.location.pathname === '/en/contact-us') {
      $('#float-social-block').addClass('ocultar-phone');
    } else {
      $('#float-social-block').removeClass('ocultar-phone');
    }
  }

}
