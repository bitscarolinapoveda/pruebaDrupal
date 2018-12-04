"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var pages_component_1 = require("./pages.component");
var home_component_1 = require("./home/home.component");
var no_page_found_component_1 = require("./no-page-found/no-page-found.component");
var contact_us_component_1 = require("./contact-us/contact-us.component");
var projects_component_1 = require("./projects/projects.component");
var products_component_1 = require("./products/products.component");
var services_component_1 = require("./services/services.component");
var pagesRoutes = [
    {
        path: '',
        component: pages_component_1.PagesComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: home_component_1.HomeComponent },
            { path: 'contact-us', component: contact_us_component_1.ContactUsComponent },
            { path: 'products', component: products_component_1.ProductsComponent },
            { path: 'projects', component: projects_component_1.ProjectsComponent },
            { path: 'services', component: services_component_1.ServicesComponent },
            { path: '**', component: no_page_found_component_1.NoPageFoundComponent },
        ]
    }
];
exports.PagesRoutes = router_1.RouterModule.forChild(pagesRoutes);
//# sourceMappingURL=pages.routes.js.map