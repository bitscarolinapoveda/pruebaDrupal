import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CustomCardService } from './../../../services/cards/v1-card.services';
import { DataMenu } from '../menu-template/menu-template.component';

@Component({
  selector: 'app-testimonies',
  templateUrl: './testimonies.component.html',
  styleUrls: ['./testimonies.component.scss']
})
export class TestimoniesComponent implements OnInit {

  public testimoniesTitle;
  public testimoniesSubTitle;
  public testimoniesData; 

  @Output() propagar = new EventEmitter<DataMenu>();
  datosMenu: DataMenu;
  public carousel;
  public images;

  constructor(
    private testimonies: CustomCardService,
  ) { }

  ngOnInit() {
    this.datosMenu = {
      label: 'TESTIMONIES',
      id: 'a12',
      url: '/imedical'
    };
    this.propagar.emit(this.datosMenu);
    this.getTestimoniesInfo ();
  }
  getTestimoniesInfo () {
    return this.testimonies.getCustomCardInformation('testimoniesbitsamericas').subscribe(items => {
      console.log(items);
      this.testimoniesTitle = items.header[0].data.title;
      this.testimoniesSubTitle = items.header[1].data.sub_title;
      this.testimoniesData = items.data;
    });
  }
}
