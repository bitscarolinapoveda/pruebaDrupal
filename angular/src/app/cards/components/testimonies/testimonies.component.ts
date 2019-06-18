import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from './../../../services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';
import { General } from '../blurb/blurb.component';
@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {
  public testimoniesTitle;
  public testimoniesSubTitle;
  public testimoniesData;
  visible: boolean;
  principalTestimonies: General;
  @Input() type: string;
  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;
  titleInternalMenu: string;
  public carousel;
  public images;

  constructor(
    private testimonies: CustomCardService,
  ) {
    this.visible = false;
    this.titleInternalMenu = '';
  }

  ngOnInit() {
    this.getTestimoniesInfo();
  }

  getTestimoniesInfo() {
    this.testimonies.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
      this.principalTestimonies = this.testimonies.getFilterPrincipalType(items, 'field_testimonies', this.type);

      this.testimonies.getCustomCardInformation('testimoniesbitsamericas').subscribe(itemsw => {
        itemsw = this.testimonies.getFilterLists(this.principalTestimonies, itemsw);
        this.testimoniesTitle = itemsw.header[0].data.title;
        this.testimoniesSubTitle = itemsw.header[1].data.sub_title;
        this.testimoniesData = itemsw.data;
        this.titleInternalMenu = itemsw.header[2].data.internal_menu_title;

        if (this.testimoniesTitle !== '' && this.testimoniesData.length !== 0) {
          this.visible = true;
          this.datosMenu = {
            label: this.titleInternalMenu,
            id: 'a12',
            url: '/imedical'
          };
          this.propagar.emit(this.datosMenu);
        }
      });
    });
  }
}
