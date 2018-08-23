import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '../../../node_modules/@angular/common';

import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';
import { CarouselIndicatorsComponent } from './components/carousel-indicators/carousel-indicators.component';
import { CardValuesComponent } from './components/card-values/card-values.component';
import { TecnologiesComponent } from './components/tecnologies/tecnologies.component';
import { PorqueBitsComponent } from './components/porque-bits/porque-bits.component';

// Servicios
import { NodeService } from '../services/cards/node.service';
import { CardService } from '../services/cards/card.service';
import { CarouselItem2Component } from './components/carousel-item-2/carousel-item-2.component';

import { CarouselControlsComponent } from './components/carousel-controls/carousel-controls.component';



@NgModule({
  declarations: [
    CarouselItemComponent,
    CarouselIndicatorsComponent,
    CardValuesComponent,
    CarouselControlsComponent,
    CarouselItem2Component,
    TecnologiesComponent,
    PorqueBitsComponent
  ],
  exports: [
    CarouselIndicatorsComponent,
    CardValuesComponent,
    CarouselControlsComponent,
    CarouselItem2Component,
    TecnologiesComponent,
    PorqueBitsComponent
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


