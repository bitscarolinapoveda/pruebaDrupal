import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NopagefoundComponent } from './components/nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NopagefoundComponent

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NopagefoundComponent

  ],
})

export class LayoutModule { }


