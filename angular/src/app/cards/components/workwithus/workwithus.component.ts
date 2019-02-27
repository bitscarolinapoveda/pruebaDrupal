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
  workWithUsTitle: string;
  workWithUsSubtitle: string;
  url: string;
  workWithUsButton: string;
  workWithUsThirdText: string;
  body: string;
  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;
  @Input() type: string;

  constructor(
    private router: ActivatedRoute,
    private footerService: CustomCardService,
  ) {
    this.workWithUsTitle = '';
    this.workWithUsSubtitle = '';
    this.url = '';
    this.workWithUsButton = '';
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
      this.workWithUsButton = items.body[1].data;
      this.workWithUsThirdText = items.body[2].data;
    });
  }
}
