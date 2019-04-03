import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isArray } from 'util';
import { CustomCardService } from '../../../services/cards/v1-card.services';

@Component({
  selector: 'app-workwithus-proserv',
  templateUrl: './workwithus-proserv.html',
  styleUrls: ['./workwithus-proserv.scss']
})
export class WorkWithUsProServComponent implements OnInit {
  workWithUsTitle: any;
  workWithUsSubtitle: any;
  url: string;
  workWithUsButton: any;
  workWithUsThirdText: string;
  body: string;
  workWithUsAdicional: any;


  constructor(
    private router: ActivatedRoute,
    private footerService: CustomCardService,
  ) {
    this.workWithUsTitle = '';
    this.workWithUsSubtitle = '';
    this.url = '';
    this.workWithUsButton = '';
    this.workWithUsAdicional = '';
  }

  ngOnInit(): void {
    this.getWorkwithUsItems();
  }

  getWorkwithUsItems() {
    this.footerService.getCustomCardInformation('workwithus').subscribe((items: { header, body, others }) => {
      this.workWithUsTitle = items.header[0].data;
      this.workWithUsSubtitle = items.header[1].data;
      this.url = items.body[0].data.link;
      this.workWithUsButton = items.body[1].data;
      this.workWithUsThirdText = items.body[3].data;
    });
  }
}
