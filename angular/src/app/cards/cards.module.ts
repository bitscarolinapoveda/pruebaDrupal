import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';
import { CarouselIndicatorsComponent } from './components/carousel-indicators/carousel-indicators.component';
import { CardValuesComponent } from './components/card-values/card-values.component';

// Servicios
import { NodeService } from '../services/cards/node.service';
import { CardService } from '../services/cards/card.service';
import { CarouselControlsComponent } from './components/carousel-controls/carousel-controls.component';



@NgModule({
  declarations: [
    CarouselItemComponent,
    CarouselIndicatorsComponent,
    CardValuesComponent,
    CarouselControlsComponent,
  ],
  exports: [
    CarouselIndicatorsComponent,
    CardValuesComponent,
    CarouselControlsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NodeService,
    CardService
  ]
})

export class CardsModule { }


