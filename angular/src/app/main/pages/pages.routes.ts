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
import { MapsiteComponent } from './mapsite/mapsite.component';
import { PqrsComponent } from './pqrs/pqrs.component';
import { from } from 'rxjs';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },

      { path: 'inicio', component: HomeComponent },
      { path: 'en/home', component: HomeComponent },

      { path: 'contactenos', component: ContactUsComponent },
      { path: 'contactenos/:type', component: ContactUsComponent },
      { path: 'en/contact-us', component: ContactUsComponent },
      { path: 'en/contact-us/:type', component: ContactUsComponent },

      { path: 'productos', component: ProductsComponent },
      { path: 'productos/:type', component: ProductsOrServicesComponent },
      { path: 'en/products', component: ProductsComponent },
      { path: 'en/products/:type', component: ProductsOrServicesComponent },

      { path: 'proyectos', component: ProjectsComponent },
      { path: 'en/projects', component: ProjectsComponent },

      { path: 'servicios', component: ServicesComponent },
      { path: 'servicios/:type', component: ProductsOrServicesComponent },
      { path: 'en/services', component: ServicesComponent },
      { path: 'en/services/:type', component: ProductsOrServicesComponent },

      { path: 'politicas', component: PoliticsComponent },
      { path: 'en/politics', component: PoliticsComponent },

      { path: 'nosotros', component: AboutUsComponent },
      { path: 'en/about-us', component: AboutUsComponent },

      { path: 'mapa-del-sitio', component: MapsiteComponent },
      { path: 'en/sitemap', component: MapsiteComponent },

      { path: 'pqrs', component: PqrsComponent },
      { path: 'en/pqrs', component: PqrsComponent },

      { path: '**', component: NoPageFoundComponent }

    ]
  }
];

export const PagesRoutes = RouterModule.forChild(pagesRoutes);
