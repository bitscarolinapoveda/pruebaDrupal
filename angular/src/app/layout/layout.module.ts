import { NgModule } from '@angular/core';

import {ItemMenuComponent} from "./components/item_menu/item_menu.component";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { FooterBrandComponent } from '../cards/components/footer/footer-brand/footer-brand.component';
import { FooterContactComponent } from '../cards/components/footer/footer-contact/footer-contact.component';
import { GeneratorOfLinksComponent } from '../cards/components/generator-of-links/generator-of-links.component';
import { FooterBlock } from '../cards/components/footer/footer-block/footer-block';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ItemMenuComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    FooterBrandComponent,
    FooterContactComponent,
    GeneratorOfLinksComponent,
    FooterBlock,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})

export class LayoutModule { }


