import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { FooterBrandComponent } from '../cards/components/footer/footer-brand/footer-brand.component';
import { FooterContactComponent } from '../cards/components/footer/footer-contact/footer-contact.component';
import { GeneratorOfLinksComponent } from '../cards/components/generator-of-links/generator-of-links.component';
import { FooterBlock } from '../cards/components/footer/footer-block/footer-block';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
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


