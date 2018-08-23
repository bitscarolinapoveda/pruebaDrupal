import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterService } from '../../../../services/cards/footer.service';
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

  constructor(private router: ActivatedRoute,
    private footerService: FooterService) {
      this.subtitle ='';
      this.body = '';
  }

  ngOnInit(): void {
    this.getFooterBlockItems(this.idBlock);
  }

  getFooterBlockItems(idBlock): void  {
    this.footerService.getFooterBlockItems(idBlock).subscribe((items: {header, body, others} ) => {
      //console.log('contact', items);
      this.subtitle = items.header[0].data;
      this.body = items.body[0].data;
    });
  }
}
