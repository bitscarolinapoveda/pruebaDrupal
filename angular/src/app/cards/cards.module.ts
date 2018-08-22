import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '../../../node_modules/@angular/common';

import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';
import { CarouselIndicatorsComponent } from './components/carousel-indicators/carousel-indicators.component';
import { CardValuesComponent } from './components/card-values/card-values.component';

// Servicios
import { NodeService } from '../services/cards/node.service';
import { CardService } from '../services/cards/card.service';
import { CardCarouselControlsComponent } from './components/card-carousel-controls/card-carousel-controls.component';




@NgModule({
  declarations: [
    CarouselItemComponent,
    CarouselIndicatorsComponent,
    CardValuesComponent,
    CardCarouselControlsComponent
  ],
  exports: [
    CarouselIndicatorsComponent,
    CardValuesComponent,
    CardCarouselControlsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [
    NodeService,
    CardService
  ]
})

export class CardsModule { }


