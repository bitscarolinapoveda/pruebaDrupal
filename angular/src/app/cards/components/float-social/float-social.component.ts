import { Component, OnInit, HostListener } from '@angular/core';
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
  hide = true;

  constructor(
    private router: ActivatedRoute,
    private footerBrand2: CustomCardService
    ) {
    this.socialmedia = [];
  }

  ngOnInit() {
    this.getFloatSocialItems();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const allDocument = document.documentElement;
    if (allDocument.clientHeight + Math.round(allDocument.scrollTop) === allDocument.scrollHeight) {
      this.hide = false;
    } else {
      this.hide = true;
    }
  }
  getFloatSocialItems() {
    this.footerBrand2.getCustomCardInformation('contactcard').subscribe((items: {header, others} ) => {
      this.socialmedia = items.others;
    });
  }
}
