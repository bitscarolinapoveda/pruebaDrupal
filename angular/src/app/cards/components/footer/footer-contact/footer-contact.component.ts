import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterContactService } from '../../../../services/cards/footerContact.service';
import { isArray } from 'util';

@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.component.html',
  styleUrls: ['./footer-contact.component.scss']
})
export class FooterContactComponent implements OnInit {

  contactLabel: string;
  contactMailLabel: string;
  contactMailLink: string;
  contactNets: any[];


  constructor(private router: ActivatedRoute,
    private footerBrand: FooterContactService) {
    this.contactLabel = '';
    this.contactMailLabel = '';
    this.contactMailLink = '';
    this.contactNets = [];
  }

  ngOnInit() {
    this.getFooterContactItems();

  }

  getFooterContactItems() {

    this.footerBrand.getFooterContactItems().subscribe((items: {header, others} ) => {
      this.contactLabel = items.header[0].data;
      this.contactMailLabel = items.header[1].data.label;
      this.contactMailLink = items.header[1].data.link;
      this.contactNets = items.others;
      //console.log(this.contactNets)
    });
  }

}
