import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FooterService } from '../../../services/cards/footer.service';
import { isArray } from 'util';

@Component({
  selector: 'app-workwithus',
  templateUrl: './workwithus.html',
  styleUrls: ['./workwithus.scss']
})
export class workwithusComponent implements OnInit {
  title: string;
  subtitle: string;
  url: string;
  textBottom: string;
  body: string;


  constructor(private router: ActivatedRoute,
    private footerService: FooterService) {
      this.title ='';
      this.subtitle = '';
      this.url = '';
      this.textBottom = '';
  }

  ngOnInit(): void {
    this.getFooterBlockItems('workwithus');
  }

  getFooterBlockItems(idBlock): void  {
    this.footerService.getFooterBlockItems(idBlock).subscribe((items: {header, body, others} ) => {
      //console.log('workwithus', items);
      this.title = items.header[0].data;
      this.subtitle = items.header[1].data;
      this.url = items.body[0].data.link;
      this.textBottom = items.body[1].data;
    });
  }
}
