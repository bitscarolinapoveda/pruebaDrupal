import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { isArray } from 'util';
import { CustomCardService } from '../../../services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';

@Component({
  selector: 'app-workwithus',
  templateUrl: './workwithus.html',
  styleUrls: ['./workwithus.scss']
})
export class WorkWithUsComponent implements OnInit {
  workWithUsTitle: any;
  workWithUsSubtitle: any;
  url: string;
  workWithUsButton: any;
  workWithUsThirdText: string;
  workWithUsAdicional: any;
  body: string;
  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;
  @Input() type: string;
  linkExternal: boolean;

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

    while (this.type.indexOf('-') > -1) {
      this.type = this.type.replace('-', '_');
    }

    this.datosMenu = {
      label: 'RELACIONADOS',
      id: 'a2',
      url: '/imedical'
    };

    this.propagar.emit(this.datosMenu);
    this.getWorkwithUsItems();
  }

  getWorkwithUsItems() {
    this.footerService.getCustomCardInformationType('workwithus', this.type).subscribe((items: { header, body, others }) => {
      this.workWithUsTitle = items.header[0].data;
      this.workWithUsSubtitle = items.header[1].data;
      this.url = items.body[0].data.link;
      this.linkExternal = items.body[0].data.external;
      this.workWithUsButton = items.body[1].data;
      this.workWithUsThirdText = items.body[3].data;
      this.workWithUsAdicional = items.body[2].data;
    });
  }
}
