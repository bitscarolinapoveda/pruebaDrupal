import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterContactService } from '../../../services/cards/footerContact.service';
import { isArray } from 'util';

@Component({
  selector: 'app-float-social',
  templateUrl: './float-social.component.html',
  styleUrls: ['./float-social.component.scss']
})
export class FloatSocialComponent implements OnInit {

  contactLabel: string;
  contactMailLabel: string;
  contactMailLink: string;
  socialmedia: any[];

  constructor(private router: ActivatedRoute,
    private footerBrand2: FooterContactService) {
    this.contactLabel = '';
    this.contactMailLabel = '';
    this.contactMailLink = '';
    this.socialmedia = [];
  }

  ngOnInit() {
    this.getFooterContactItems();

  }

  getFooterContactItems() {

    this.footerBrand2.getFooterContactItems().subscribe((items: {header, others} ) => {
      this.contactLabel = items.header[0].data;
      this.contactMailLabel = items.header[1].data.label;
      this.contactMailLink = items.header[1].data.link;
      this.socialmedia = items.others;
      //console.log(this.socialmedia)
    });
  }

}
