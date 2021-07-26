import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { RecetasNuevoComponent } from './recetasNuevo/recetasNuevo.component';

const routes: Routes = [
  {   
    path: "''",
    redirectTo: '/home',
    pathMatch: 'full'
 },
  { path: 'home', component: BodyComponent },
  { path: 'recetas', component: RecetasNuevoComponent,  data: { title: 'Recetas' } },
  { path: '**', component: BodyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  /* imports: [RouterModule.forRoot(routes,{
    scrollPositionRestoration: 'enabled'
  })] */
  



  
})
export class AppRoutingModule { }
