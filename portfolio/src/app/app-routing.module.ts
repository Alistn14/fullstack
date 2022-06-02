import { NgModule } from '@angular/core';
// rutas
import { Routes, RouterModule } from '@angular/router';
// importaciones
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';

const app_routes: Routes=[
    // ruta principal del local host, cuando la página esta vacía me redirige al portfolio en el local host al inicio.
    { path: "inici", component: PortfolioComponent}, 
    // Ruta de la subpágina about ahora llamada equipo (sección) 
    { path: "equip", component: AboutComponent},
    // Ruta de la subpágina item (segunda sección)
    { path: "item", component: ItemComponent},
// cuando aparece cualquier otra cosa lo redirige al local host otra vez, de vuelta a la página principal.
    { path: "**", pathMatch:"full" ,redirectTo: ""},
];

// con forRoot revisa todo el app_routes para reconocer cada ruta.
@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, {useHash:true} )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }