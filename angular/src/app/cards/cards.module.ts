import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselItem1Component } from './components/carousel-item-1/carousel-item-1.component';
import { CarouselIndicators1Component } from './components/carousel-indicators-1/carousel-indicators-1.component';

// Servicios
import { NodeService } from '../services/cards/node.service';


@NgModule({
  declarations: [
    CarouselItem1Component,
    CarouselIndicators1Component
  ],
  exports: [
    CarouselIndicators1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    NodeService
  ]
})

export class CardsModule { }


