import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: 'NoPageFoundComponent', component: NoPageFoundComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'NoPageFoundComponent' }
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
