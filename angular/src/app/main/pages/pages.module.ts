import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

import { LayoutModule } from '../../layout/layout.module';
import { AdfModule } from '../../@adf/adf.module';
import { CardsModule } from '../../cards/cards.module';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    NopagefoundComponent
  ],
  exports: [
    HomeComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AdfModule,
    CardsModule,
    PAGES_ROUTES
  ]
})
export class PagesModule { }