import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { CommonModule } from '../../../node_modules/@angular/common';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent,


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavbarComponent


  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ],
})

export class LayoutModule { }


