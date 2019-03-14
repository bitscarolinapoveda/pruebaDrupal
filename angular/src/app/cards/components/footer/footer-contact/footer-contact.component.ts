import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isArray } from 'util';
import { CustomCardService } from '../../../../services/cards/v1-card.services';

@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.component.html',
  styleUrls: ['./footer-contact.component.scss']
})
export class FooterContactComponent implements OnInit {

  contactTitle: any;
  contactMailLabel: string;
  contactMailLink: any;
  contactIcon1: string;
  contactIcon2: string;
  contactIcon3: string;
  contactIcon4: string;
  contactSocialArray: any[];


  constructor(
    private router: ActivatedRoute,
    private footerBrand: CustomCardService
  ) {
    this.contactTitle = '';
    this.contactMailLabel = '';
    this.contactMailLink = '';
    this.contactIcon1 = '';
    this.contactIcon2 = '';
    this.contactIcon3 = '';
    this.contactIcon4 = '';
    this.contactSocialArray = [];
  }

  ngOnInit() {
    this.getFooterContactItems();

  }

  getFooterContactItems() {

    this.footerBrand.getCustomCardInformation('contactcard').subscribe((items: { header, others }) => {
      this.contactTitle = items.header[0].data;
      this.contactMailLink = items.header[1].data;
      this.contactSocialArray = items.others;
    });
  }

}
