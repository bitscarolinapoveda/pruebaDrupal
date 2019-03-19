import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';


@Component({
  selector: 'app-tecnologies-projectservice',
  templateUrl: './tecnologies-projectservice.component.html',
  styleUrls: ['./tecnologies-projectservice.component.scss']
})
export class TecnologiesProjectserviceComponent implements OnInit {

  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;
  @Input() type: string;
  title: string;
  subtitle: string;
  CarouselControlArray: any[];
  visible: boolean;

  constructor(private https: CustomCardService) {
    this.CarouselControlArray = [];
    this.visible = false;
  }

  ngOnInit() {
    while (this.type.indexOf('-') > -1) {
      this.type = this.type.replace('-', '_');
    }

    this.datosMenu = {
      label: 'TECNOLOGIA',
      id: 'a11',
      url: '/imedical'
    };

    this.propagar.emit(this.datosMenu);
    this.getTecnoInformationService();
  }

  getTecnoInformationService() {
    this.https.getCustomCardInformationType('expertsinimedicalcard', this.type).subscribe(items => {
      this.title = items.header[0].data.title;
      this.subtitle = items.header[1].data.sub_title;
      this.CarouselControlArray = items.data;
      if (this.title !== '' && this.CarouselControlArray.length !== 0) {
        this.visible = true;
      }
    });

  }

}
