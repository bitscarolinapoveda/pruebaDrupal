import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselItem1Component } from './components/carousel-item-1/carousel-item-1.component';
import { CarouselIndicators1Component } from './components/carousel-indicators-1/carousel-indicators-1.component';
import { CardValuesComponent } from './components/card-values/card-values.component';

// Servicios
import { NodeService } from '../services/cards/node.service';
import { CardService } from '../services/cards/card.service';



@NgModule({
  declarations: [
    CarouselItem1Component,
    CarouselIndicators1Component,
    CardValuesComponent
  ],
  exports: [
    CarouselIndicators1Component,
    CardValuesComponent
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


