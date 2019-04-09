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
  public carousel;
  public images;

  constructor(
    private testimonies: CustomCardService,
  ) {
    this.visible = false;
  }

  ngOnInit() {
    this.getTestimoniesInfo();
  }
  getTestimoniesInfo() {
    /* return this.testimonies.getCustomCardInformation('testimoniesbitsamericas').subscribe(items => {
      this.testimoniesTitle = items.header[0].data.title;
      this.testimoniesSubTitle = items.header[1].data.sub_title;
      this.testimoniesData = items.data;
      if (this.testimoniesTitle !== '' && this.testimoniesData.length !== 0) {
        this.visible = true;
        this.datosMenu = {
          label: 'TESTIMONIES',
          id: 'a12',
          url: '/imedical'
        };
        this.propagar.emit(this.datosMenu);
      }
    }); */

    this.testimonies.getCustomCardInformation('allproductsandservicescard_2').subscribe(items => {
      this.principalTestimonies = this.testimonies.getFilterPrincipalType(items, 'field_testimonies', this.type);

      this.testimonies.getCustomCardInformation('testimoniesbitsamericas').subscribe(itemsw => {
        this.testimoniesTitle = itemsw.header[0].data.title;
        this.testimoniesSubTitle = itemsw.header[1].data.sub_title;

        const list_items = itemsw.data;

        this.testimoniesData = this.testimonies.getFilterLists(this.principalTestimonies, itemsw.data);

        if (this.testimoniesTitle !== '' && this.testimoniesData.length !== 0) {
          this.visible = true;
          this.datosMenu = {
            label: 'TESTIMONIES',
            id: 'a12',
            url: '/imedical'
          };
          this.propagar.emit(this.datosMenu);
        }

      });
    });
  }
}
