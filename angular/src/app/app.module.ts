import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './layout/components/footer/footer.component';
import { HeaderComponent } from './layout/components/header/header.component';
import { ContentComponent } from './layout/components/content/content.component';
import { SliderOneComponent } from './cards/components/slider-one/slider-one.component';


// Modulos
import { AdfModule } from './@adf/adf.module';

// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    SliderOneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AdfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
