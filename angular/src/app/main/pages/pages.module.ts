import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PagesRoutes } from './pages.routes';

import { LayoutModule } from '../../layout/layout.module';
import { AdfModule } from '../../@adf/adf.module';
import { CardsModule } from '../../cards/cards.module';

import { LocationStrategy, PathLocationStrategy } from '@angular/common';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ProductServicesComponent } from '../../cards/components/product-services/product-services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { HttpService } from '../../services/http/http.service';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsBasicUIModule } from '@ng-dynamic-forms/ui-basic';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ProductsOrServicesComponent } from './products-or-services/products-or-services.component';
import { PoliticsComponent } from './politics/politics.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MapsiteComponent } from './mapsite/mapsite.component';
import { PqrsComponent } from './pqrs/pqrs.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    ContactUsComponent,
    ProjectsComponent,
    ProductsComponent,
    ServicesComponent,
    NoPageFoundComponent,
    ProductServicesComponent,
    ProductsOrServicesComponent,
    PoliticsComponent,
    AboutUsComponent,
    MapsiteComponent,
    PqrsComponent
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
    ReactiveFormsModule,
    DynamicFormsCoreModule,
    DynamicFormsBasicUIModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    HttpService,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class PagesModule {
}
