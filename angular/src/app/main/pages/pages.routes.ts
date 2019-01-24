import {RouterModule, Routes} from '@angular/router';

import {PagesComponent} from './pages.component';
import {HomeComponent} from './home/home.component';
import {NoPageFoundComponent} from './no-page-found/no-page-found.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {ProjectsComponent} from "./projects/projects.component";
import {ProductsComponent} from "./products/products.component";
import {ServicesComponent} from "./services/services.component";

import { iMedicalComponent } from "./iMedical/iMedical.component";
import { PoliticsComponent } from "./politics/politics.component";
import { from } from 'rxjs';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', component: HomeComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'products', component: ProductsComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'services', component: ServicesComponent},
      {path: 'iMedical', component: iMedicalComponent},
      {path: 'politics', component: PoliticsComponent},
      {path: '**', component: NoPageFoundComponent},

      // { path: 'home', component: HomeComponent },
      // { path: '', component: HomeComponent },
      // { path: 'NoPageFoundComponent', component: NoPageFoundComponent },
      // { path: '**', pathMatch: 'full', redirectTo: 'N√oPageFoundComponent' }
      // { path: 'home', component: HomeComponent },
      // { path: '', redirectTo: '/home', pathMatch: 'full' },
      // { path: 'contact-us', component: ContactUsComponent },
      // { path: 'contact-us', redirectTo: '/contact-us' },
      // { path: '**', component: NoPageFoundComponent },
    ]
  }
];

export const PagesRoutes = RouterModule.forChild(pagesRoutes);
