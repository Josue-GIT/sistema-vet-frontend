import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { RegmasComponent } from './pages/regmas/regmas.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { VeterinariosComponent } from './pages/veterinarios/veterinarios.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HistorialComponent } from './pages/historial/historial.component';
import { CitasComponent } from './pages/citas/citas.component';

const routes: Routes = [
  { path: 'home',
    component: HomeComponent,
    pathMatch: 'full' },
  {
  path:'',
  component:HomeComponent,
  pathMatch:'full'
  },
  {
    path:'signup',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'veterinario',
    component:VeterinariosComponent,
    pathMatch:'full'
  },
  {
    path:'perfil',
    component:PerfilComponent,
    pathMatch:'full'
  },
  {
    path:'historial',
    component:HistorialComponent,
    pathMatch:'full'
  },
  {
    path:'servicios',
    component:ServiciosComponent,
    pathMatch:'full'
  },
  {
    path:'regmas',
    component:RegmasComponent,
    pathMatch:'full'
  },
  {
    path:'citas',
    component:CitasComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
