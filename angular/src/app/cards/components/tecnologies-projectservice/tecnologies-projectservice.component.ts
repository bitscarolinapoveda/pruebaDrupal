import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from 'src/app/services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';
import { Observable } from 'rxjs/Observable';
import { General } from '../blurb/blurb.component';

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
  principalTecnologies: General;
  casTecnologies: any = 0;
  visible: boolean;

  constructor(private https: CustomCardService) {
    this.CarouselControlArray = [];
    this.visible = false;
  }

  ngOnInit() {
    this.getTecnoInformationService();
  }

  getTecnoInformationService() {

    this.https.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
      this.principalTecnologies = this.https.getFilterPrincipalType(items, 'field_technologies', this.type);

      this.https.getCustomCardInformation('expertsinimedicalcard').subscribe(itemsw => {
        this.title = itemsw.header[0].data.title;
        this.subtitle = itemsw.header[1].data.sub_title;
        itemsw.data = this.https.addImageField(itemsw.data, ['field_tech_color_image']);
        itemsw.data = this.https.addImageField(itemsw.data, ['field_tech_image']);

        const list_items = itemsw.data;

        this.CarouselControlArray = [];
        this.CarouselControlArray = this.https.getFilterLists(this.principalTecnologies, itemsw.data);

        if (this.title !== '' && this.CarouselControlArray.length !== 0) {
          this.visible = true;
          this.datosMenu = {
            label: 'TECNOLOGIA',
            id: 'a11',
            url: '/imedical'
          };
          this.propagar.emit(this.datosMenu);
        }

      });
    });
  }
}
