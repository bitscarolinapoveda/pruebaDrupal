import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isArray } from 'util';
import { CustomCardService } from '../../../services/cards/v1-card.services';

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

  constructor(
    private router: ActivatedRoute,
    private footerBrand2: CustomCardService
    ) {
    this.socialmedia = [];
  }

  ngOnInit() {
    this.getFloatSocialItems();

  }

  getFloatSocialItems() {

    this.footerBrand2.getCustomCardInformation('contactcard').subscribe((items: {header, others} ) => {
      this.socialmedia = items.others;
    });
  }

}
