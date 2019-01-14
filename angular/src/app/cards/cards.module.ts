import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '../../../node_modules/@angular/common';

import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';
import { CarouselIndicatorsComponent } from './components/carousel-indicators/carousel-indicators.component';
import { TecnologiesComponent } from './components/tecnologies/tecnologies.component';
import { PorqueBitsComponent } from './components/porque-bits/porque-bits.component';
import { CarouselItem2Component } from './components/carousel-item-2/carousel-item-2.component';
import { AlliancesComponent } from './components/alliances/alliances.component';
import { CarouselControlsComponent } from './components/carousel-controls/carousel-controls.component';
import { WorkWithUsComponent } from './components/workwithus/workwithus.component';
import { BannerComponent } from './components/banner/banner.component';
import { TitleComponent } from './components/titles/titles.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { VideoInformationComponent } from './components/video-information/video-information.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { ClientCardComponent } from './components/client-card/client-card.component';
import { ProjectSummaryComponent } from './components/project-summary/project-summary.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { SlideComponent } from './components/slide/slide.component';
import { SliderComponent } from './components/slider/slider.component';
import { BlurbComponent } from './components/blurb/blurb.component';
import { CardImgTextComponent } from './components/card-img-text/card-img-text.component';
import { BlogComponent } from './components/blog/blog.component';




// Servicios
import { NodeService } from '../services/cards/node.service';
import {RouterModule} from "@angular/router";
import {AdfModule} from "../@adf/adf.module";


//Pipes
import { SafeHtmlPipe } from '../pipes/safehtml.pipe';
import { SafeCssPipe } from '../pipes/safecss.pipe';

@NgModule({
  declarations: [
    SafeHtmlPipe,
    SafeCssPipe,
    CarouselItemComponent,
    CarouselIndicatorsComponent,
    CarouselControlsComponent,
    CarouselItem2Component,
    TecnologiesComponent,
    PorqueBitsComponent,
    AlliancesComponent,
    WorkWithUsComponent,
    BannerComponent,
    TitleComponent,
    TabsComponent,
    VideoInformationComponent,
    SeparatorComponent,
    ClientCardComponent,
    ProjectSummaryComponent,
    MenuTemplateComponent,
    SlideComponent,
    SliderComponent,
    BlurbComponent,
    CardImgTextComponent,
    BlogComponent
  ],
  exports: [
    CarouselItemComponent,
    CarouselIndicatorsComponent,
    CarouselControlsComponent,
    CarouselItem2Component,
    TecnologiesComponent,
    PorqueBitsComponent,
    AlliancesComponent,
    WorkWithUsComponent,
    BannerComponent,
    TitleComponent,
    TabsComponent,
    VideoInformationComponent,
    SeparatorComponent,
    ClientCardComponent,
    ProjectSummaryComponent,
    MenuTemplateComponent,
    SlideComponent,
    SliderComponent,
    BlurbComponent,
    CardImgTextComponent,
    BlogComponent
  ],
  imports: [BrowserModule, CommonModule, NgbModule, RouterModule, AdfModule],
  providers: [NodeService]
})
export class CardsModule {}


