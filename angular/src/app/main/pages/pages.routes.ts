import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { ProductsOrServicesComponent } from './products-or-services/products-or-services.component';
import { PoliticsComponent } from './politics/politics.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { from } from 'rxjs';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'product/:type', component: ProductsOrServicesComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'service/:type', component: ProductsOrServicesComponent },
      { path: 'politics', component: PoliticsComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: '**', component: NoPageFoundComponent }

      // { path: 'home', component: HomeComponent },
      // { path: '', component: HomeComponent },
      // { path: 'NoPageFoundComponent', component: NoPageFoundComponent },
      // { path: '**', pathMatch: 'full', redirectTo: 'N√oPageFoundComponent' }
      // { path: 'home', component: HomeComponent },
      // { path: '', redirectTo: '/home', pathMatch: 'full' },
      // { path: 'contact-us', component: ContactUsComponent },
      // {path: 'workus', component: WorkusComponent},
      // { path: 'contact-us', redirectTo: '/contact-us' },
      // {path: 'workus', redirectTo: '/workus'},
      // { path: '**', component: NoPageFoundComponent },

    ]
  }
];

export const PagesRoutes = RouterModule.forChild(pagesRoutes);
