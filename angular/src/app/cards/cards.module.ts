import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '../../../node_modules/@angular/common';

import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';
import { CarouselIndicatorsComponent } from './components/carousel-indicators/carousel-indicators.component';
import { CardValuesComponent } from './components/card-values/card-values.component';
import { TecnologiesComponent } from './components/tecnologies/tecnologies.component';
import { PorqueBitsComponent } from './components/porque-bits/porque-bits.component';
import { CarouselItem2Component } from './components/carousel-item-2/carousel-item-2.component';
import { AlliancesComponent } from './components/alliances/alliances.component';
import { CarouselControlsComponent } from './components/carousel-controls/carousel-controls.component';
import { workwithusComponent } from './components/workwithus/workwithus.component';
import { BannerComponent } from './components/banner/banner.component';
import { TitleComponent } from './components/titles/titles.component';
import { TabsComponent } from './components/tabs/tabs.component';

// Servicios
import { NodeService } from '../services/cards/node.service';
import { CardService } from '../services/cards/card.service';




@NgModule({
  declarations: [
    CarouselItemComponent,
    CarouselIndicatorsComponent,
    CardValuesComponent,
    CarouselControlsComponent,
    CarouselItem2Component,
    TecnologiesComponent,
    PorqueBitsComponent,
    AlliancesComponent,
    workwithusComponent,
    BannerComponent,
    TitleComponent,
    TabsComponent
  ],
  exports: [
    CarouselIndicatorsComponent,
    CardValuesComponent,
    CarouselControlsComponent,
    CarouselItem2Component,
    TecnologiesComponent,
    PorqueBitsComponent,
    AlliancesComponent,
    workwithusComponent,
    BannerComponent,
    TitleComponent,
    TabsComponent
  ],
  imports: [BrowserModule, CommonModule],
  providers: [NodeService, CardService]
})
export class CardsModule {}


