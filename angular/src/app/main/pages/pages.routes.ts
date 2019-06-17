import { NgModule } from '@angular/core';
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
import { HnResolverService } from '../../services/cards/hn-resolver.service';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: '', redirectTo: '/inicio', pathMatch: 'full', resolve: { message: HnResolverService } },

      { path: 'inicio', component: HomeComponent, resolve: { message: HnResolverService } },
      { path: 'home', redirectTo: '/inicio', pathMatch: 'full', resolve: { message: HnResolverService } },
      { path: 'en/home', component: HomeComponent, resolve: { message: HnResolverService } },
      { path: 'contactenos', component: ContactUsComponent, resolve: { message: HnResolverService } },
      { path: 'contact-us', redirectTo: '/contactenos', pathMatch: 'full', resolve: { message: HnResolverService } },
      { path: 'contactenos/:type', component: ContactUsComponent, resolve: { message: HnResolverService } },
      { path: 'en/contact-us', component: ContactUsComponent, resolve: { message: HnResolverService } },
      { path: 'en/contact-us/:type', component: ContactUsComponent, resolve: { message: HnResolverService } },

      { path: 'productos', component: ProductsComponent, resolve: { message: HnResolverService } },
      { path: 'productos/:type', component: ProductsOrServicesComponent, resolve: { message: HnResolverService } },
      { path: 'en/products', component: ProductsComponent, resolve: { message: HnResolverService } },
      { path: 'en/products/:type', component: ProductsOrServicesComponent, resolve: { message: HnResolverService } },

      { path: 'proyectos', component: ProjectsComponent, resolve: { message: HnResolverService } },
      { path: 'en/projects', component: ProjectsComponent, resolve: { message: HnResolverService } },

      { path: 'servicios', component: ServicesComponent, resolve: { message: HnResolverService } },
      { path: 'servicios/:type', component: ProductsOrServicesComponent, resolve: { message: HnResolverService } },
      { path: 'en/services', component: ServicesComponent, resolve: { message: HnResolverService } },
      { path: 'en/services/:type', component: ProductsOrServicesComponent, resolve: { message: HnResolverService } },

      { path: 'politicas', component: PoliticsComponent, resolve: { message: HnResolverService } },
      { path: 'en/politics', component: PoliticsComponent, resolve: { message: HnResolverService } },
      { path: 'politics', redirectTo: '/politicas', pathMatch: 'full', resolve: { message: HnResolverService } },

      { path: 'nosotros', component: AboutUsComponent, resolve: { message: HnResolverService } },

      { path: 'en/about-us', component: AboutUsComponent, resolve: { message: HnResolverService } },
      { path: 'contact-us', redirectTo: '/contactenos', pathMatch: 'full', resolve: { message: HnResolverService } },

      { path: 'mapa-del-sitio', component: MapsiteComponent, resolve: { message: HnResolverService } },
      { path: 'en/sitemap', component: MapsiteComponent, resolve: { message: HnResolverService } },

      { path: 'pqrs', component: PqrsComponent, resolve: { message: HnResolverService } },
      { path: 'en/pqrs', component: PqrsComponent, resolve: { message: HnResolverService } },

      { path: '**', component: NoPageFoundComponent },
      { path: 'error', component: NoPageFoundComponent }

    ]
  }
];

//export const PagesRoutes = RouterModule.forChild(pagesRoutes);

@NgModule({
  imports: [RouterModule.forRoot(pagesRoutes)],
  exports: [RouterModule],
  providers: [
    HnResolverService
  ]
})
export class PagesRoutes {}
