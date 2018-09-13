import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ContactUsComponent } from './Contact-Us/Contact-Us.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'contact-us', redirectTo: '/contact-us' },
      { path: '**', component: NoPageFoundComponent }
    ] 
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
