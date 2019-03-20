import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isArray } from 'util';
import { CustomCardService } from '../../../services/cards/v1-card.services';

declare var jQuery: any;
declare var $: any;

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
  descrip_form: string;

  constructor(
    private router: ActivatedRoute,
    private footerBrand2: CustomCardService
  ) {
    this.socialmedia = [];
  }

  ngOnInit() {
    this.getFloatSocialItems();

    this.getModalData();

    $(function () {
      $('#openModal').click(function (e) {
        $('a[href$="#contactusModal"]').on('click', function () {
          $('#contactusModal').modal('show');
        });
        e.preventDefault();
      });
    });

  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if ($(window).height() + $(document).scrollTop() === $(document).height()) {
      this.hide = false;
    } else {
      this.hide = true;
    }
  }
  getFloatSocialItems() {
    this.footerBrand2.getCustomCardInformation('contactcard').subscribe((items: { header, others }) => {
      this.socialmedia = items.others;
    });
  }
  getModalData() {
    this.footerBrand2.getCustomForm('work_with_us').subscribe(params => {
      this.descrip_form = params.markup['#markup'];
    });
  }


}
