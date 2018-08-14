import { NgModule } from '@angular/core';
import { LoadingComponent } from 'src/app/@adf/components/shared/loading/loading.component';


@NgModule({
  declarations: [
    LoadingComponent,
  ],
  exports: [
    LoadingComponent,
  ]
})
export class AdfModule {
}