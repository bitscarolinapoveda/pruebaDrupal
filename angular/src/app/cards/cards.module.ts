import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '../../../node_modules/@angular/common';

import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';
import { CarouselIndicatorsComponent } from './components/carousel-indicators/carousel-indicators.component';
import { CardValuesComponent } from './components/card-values/card-values.component';
import { TecnologiesComponent } from './components/tecnologies/tecnologies.component';
import { PorqueBitsComponent } from './components/porque-bits/porque-bits.component';
//import { FooterBlock } from './components/footer/footer-block/footer-block';
// Servicios
import { NodeService } from '../services/cards/node.service';
import { CardService } from '../services/cards/card.service';
import { CarouselItem2Component } from './components/carousel-item-2/carousel-item-2.component';
import { AlliancesComponent } from './components/alliances/alliances.component';

import { CarouselControlsComponent } from './components/carousel-controls/carousel-controls.component';



@NgModule({
  declarations: [
    CarouselItemComponent,
    CarouselIndicatorsComponent,
    CardValuesComponent,
<<<<<<< HEAD
    CardCarouselControlsComponent,
    PorqueBitsComponent,
=======
    CarouselControlsComponent,
    CarouselItem2Component,
    TecnologiesComponent,
    PorqueBitsComponent,
    AlliancesComponent
>>>>>>> bc84c28fa0b6ba21f315a7aee517720b41fec000
  ],
  exports: [
    CarouselIndicatorsComponent,
    CardValuesComponent,
<<<<<<< HEAD
    CardCarouselControlsComponent,
    PorqueBitsComponent,

=======
    CarouselControlsComponent,
    CarouselItem2Component,
    TecnologiesComponent,
    PorqueBitsComponent,
    AlliancesComponent
>>>>>>> bc84c28fa0b6ba21f315a7aee517720b41fec000
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


