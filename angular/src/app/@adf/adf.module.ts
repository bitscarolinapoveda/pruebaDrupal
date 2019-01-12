import {NgModule} from '@angular/core';
import {LoadingComponent} from 'src/app/@adf/components/shared/loading/loading.component';
import {LocationsComponent} from "./components/shared/locations/locations.component";
import {CommonModule} from "@angular/common";
import {AgmCoreModule} from "@agm/core";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    LoadingComponent,
    LocationsComponent
  ],
  exports: [
    LoadingComponent,
    LocationsComponent
  ],
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDw-dMpMZremi-1F3rIlzEuzrPgX9bojjM'
    }),
    NgbModule
  ]
})
export class AdfModule {
}