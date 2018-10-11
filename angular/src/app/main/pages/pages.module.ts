import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PagesRoutes } from './pages.routes';

import { LayoutModule } from '../../layout/layout.module';
import { AdfModule } from '../../@adf/adf.module';
import { CardsModule } from '../../cards/cards.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ProductServicesComponent } from '../../cards/components/product-services/product-services.component';
import { FloatSocialComponent } from '../../cards/components/float-social/float-social.component';
import { ContactUsComponent } from './Contact-Us/Contact-Us.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ContactUsComponent,
    NoPageFoundComponent,
    ProductServicesComponent,
    FloatSocialComponent,
  ],
  exports: [
    HomeComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AdfModule,
    CardsModule,
    PagesRoutes,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class PagesModule { }
