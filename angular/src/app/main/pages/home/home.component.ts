import { Component, OnInit } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { ActivatedRoute, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  type: string;
  uuid: string;
  languagueBrowser: any;

  constructor(private home: CustomCardService, private router: Router) {
    this.type = 'home';
    this.uuid = 'be6c9489-edec-441e-a542-5927cdfe6e89';
    this.languagueBrowser = '';
  }

  ngOnInit() {
    $(window).scrollTop(0);
    $('#float-social-block').removeClass('ocultar-phone');
    $(".envolope").show();
    this.getHomeService();
  }

  getHomeService() {
    this.languagueBrowser = this.home.getLanguageBrowser();
    this.home.getCustomContentBasicPage(this.uuid).subscribe(params => {
      this.home.getMetaService(params.metatags);
      if (params.others_urls[this.languagueBrowser] !== '' ||
        params.others_urls[this.languagueBrowser] !== '/' + this.languagueBrowser ||
        params.others_urls[this.languagueBrowser] !== '/node') {
        this.router.navigate([params.others_urls[this.languagueBrowser]]);
      }
    });
  }

}
