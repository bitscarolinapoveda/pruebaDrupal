import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './layout/components/nopagefound/nopagefound.component';



const appRoutes: Routes = [
    { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes );
