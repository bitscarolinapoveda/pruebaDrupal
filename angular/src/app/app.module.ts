import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

// Modulos
import { AdfModule } from './@adf/adf.module';
import { PagesModule } from './main/pages/pages.module';

// Rutas
import { APP_ROUTES } from './app.routes';

// Componentes
import { AppComponent } from './app.component';


// Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Notificaciones
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services/shared/notification.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AdfModule,
    PagesModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    APP_ROUTES
  ],
  providers: [NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
