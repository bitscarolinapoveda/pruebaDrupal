import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpService } from '../../../services/http/http.service';
import { Meta } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {
  constructor(private meta: Meta) {
  }

  ngOnInit() {
    this.meta.removeTag('name="general"');
    this.meta.updateTag({ name: 'component', content: 'app-contact-us' });
    if (window.location.pathname === '/contactenos' || window.location.pathname === '/en/contact-us') {
      $('#float-social-block').addClass('ocultar-phone');
    } else {
      $('#float-social-block').removeClass('ocultar-phone');
    }
  }

}
