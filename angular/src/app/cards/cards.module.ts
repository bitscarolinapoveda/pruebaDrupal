import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '../../../node_modules/@angular/common';
import { MessageModule } from '../message/message.module';
import { RecaptchaModule } from 'ng-recaptcha';

import { CarouselItemComponent } from './components/carousel-item/carousel-item.component';
import { CarouselIndicatorsComponent } from './components/carousel-indicators/carousel-indicators.component';
import { TecnologiesComponent } from './components/tecnologies/tecnologies.component';
import { PorqueBitsComponent } from './components/porque-bits/porque-bits.component';
import { CarouselItem2Component } from './components/carousel-item-2/carousel-item-2.component';
import { AlliancesComponent } from './components/alliances/alliances.component';
import { CarouselControlsComponent } from './components/carousel-controls/carousel-controls.component';
import { WorkWithUsComponent } from './components/workwithus/workwithus.component';
import { WorkWithUsProServComponent } from './components/workwithus-proserv/workwithus-proserv.component';
import { BannerComponent } from './components/banner/banner.component';
import { TitleComponent } from './components/titles/titles.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { VideoInformationComponent } from './components/video-information/video-information.component';
import { SeparatorComponent } from './components/separator/separator.component';
import { MenuTemplateComponent } from './components/menu-template/menu-template.component';
import { SlideComponent } from './components/slide/slide.component';
import { SliderComponent } from './components/slider/slider.component';
import { BlurbComponent } from './components/blurb/blurb.component';
import { CardImgTextComponent } from './components/card-img-text/card-img-text.component';
import { BlogComponent } from './components/blog/blog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClientProjectImedicalComponent } from './components/client-project-imedical/client-project-imedical.component';
import { WhybitsamericasComponent } from './components/whybitsamericas/whybitsamericas.component';
import { KnowusComponent } from './components/knowus/knowus.component';
import { TeamComponent } from './components/team/team.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { HistoryComponent } from './components/history/history.component';
import { FilterComponent } from './components/filter/filter.component';
import { ServicesFilterComponent } from './components/services-filter/services-filter.component';
import { OurWorkComponent } from './components/our-work/our-work.component';
import { ScreenshotsComponent } from './components/screenshots/screenshots.component';
import { ProjectFilterComponent } from './components/project-filter/project-filter.component';

// Servicios
import { NodeService } from '../services/cards/node.service';
import { RouterModule } from '@angular/router';
import { AdfModule } from '../@adf/adf.module';
import { SlickModule } from 'ngx-slick';
import { OwlModule } from 'ngx-owl-carousel';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md';

// Pipes
import { SafeHtmlPipe } from '../pipes/safehtml.pipe';
import { SafeCssPipe } from '../pipes/safecss.pipe';
import { ClientProServComponent } from './components/client-proserv/client-proserv.component';
import { WorkusComponent } from './components/workus/workus.component';
import { OrganizeGridMuuriDirective } from '../directives/organize-grid-muuri.directive';
import { LoadDirective } from './components/client-proserv/load.directive';


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
    WorkWithUsProServComponent,
    WorkusComponent,
    BannerComponent,
    TitleComponent,
    TabsComponent,
    VideoInformationComponent,
    SeparatorComponent,
    MenuTemplateComponent,
    SlideComponent,
    SliderComponent,
    BlurbComponent,
    CardImgTextComponent,
    BlogComponent,
    ClientProjectImedicalComponent,
    ClientProServComponent,
    WhybitsamericasComponent,
    KnowusComponent,
    TeamComponent,
    AchievementsComponent,
    HistoryComponent,
    TestimoniesComponent,
    FilterComponent,
    ServicesFilterComponent,
    OrganizeGridMuuriDirective,
    LoadDirective,
    OurWorkComponent,
    ScreenshotsComponent,
    ProjectFilterComponent
  ],
  exports: [
    CarouselItemComponent,
    CarouselIndicatorsComponent,
    CarouselControlsComponent,
    CarouselItem2Component,
    TecnologiesComponent,
    PorqueBitsComponent,
    AlliancesComponent,
    WorkusComponent,
    WorkWithUsComponent,
    WorkWithUsProServComponent,
    BannerComponent,
    TitleComponent,
    TabsComponent,
    VideoInformationComponent,
    SeparatorComponent,
    MenuTemplateComponent,
    SlideComponent,
    SliderComponent,
    BlurbComponent,
    CardImgTextComponent,
    BlogComponent,
    ClientProjectImedicalComponent,
    ClientProServComponent,
    WhybitsamericasComponent,
    KnowusComponent,
    TeamComponent,
    AchievementsComponent,
    HistoryComponent,
    TestimoniesComponent,
    FilterComponent,
    OurWorkComponent,
    MessageModule,
    ServicesFilterComponent,
    OurWorkComponent,
    RecaptchaModule,
    ScreenshotsComponent,
    ProjectFilterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule,
    RouterModule,
    AdfModule,
    SlickModule.forRoot(),
    OwlModule,
    NgxCarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    SelectModule,
    ReactiveFormsModule,
    MessageModule,
    RecaptchaModule.forRoot(),
    CarouselModule.forRoot(),
    WavesModule.forRoot()
  ],
  providers: [NodeService, CarouselModule, WavesModule]
})
export class CardsModule { }


