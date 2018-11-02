import { CustomCardService } from './../../../../services/cards/v1-card.services';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isArray } from 'util';

@Component({
  selector: 'app-footer-block',
  templateUrl: './footer-block.html',
  styleUrls: ['./footer-block.scss']
})
export class FooterBlock implements OnInit {
  @Input() idBlock: string ;
  subtitle: string;
  body: string;

  constructor(
    private router: ActivatedRoute,
    private footerBlockService: CustomCardService
    ) {
      this.subtitle ='';
      this.body = '';
  }

  ngOnInit(): void {
    this.getFooterBlockItems();
  }

  getFooterBlockItems(): void  {
    this.footerBlockService.getCustomCardInformation('footerblock').subscribe((items: {header, body, others} ) => {
      console.log(items);
      this.subtitle = items.header[0].data;
      this.body = items.body[0].data;
    });
  }
}
