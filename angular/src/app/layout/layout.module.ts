import { NgModule } from '@angular/core';

import { ItemMenuComponent } from './components/item_menu/item_menu.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '../../../node_modules/@angular/common';
import { FooterBrandComponent } from '../cards/components/footer/footer-brand/footer-brand.component';
import { FooterContactComponent } from '../cards/components/footer/footer-contact/footer-contact.component';
import { FooterNewsletterComponent } from '../cards/components/footer/footer-newsletter/footer-newsletter.component'
import { GeneratorOfLinksComponent } from '../cards/components/generator-of-links/generator-of-links.component';
import { FooterBlockComponent } from '../cards/components/footer/footer-block/footer-block';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MessageModule} from '../message/message.module';
import { FloatSocialComponent } from '../cards/components/float-social/float-social.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule
  ],
  declarations: [
    ItemMenuComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    FooterBrandComponent,
    FooterContactComponent,
    FooterNewsletterComponent,
    GeneratorOfLinksComponent,
    FooterBlockComponent,
    FloatSocialComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FloatSocialComponent
  ],
})

export class LayoutModule { }


