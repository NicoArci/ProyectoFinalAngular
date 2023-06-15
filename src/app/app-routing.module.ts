import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaLogComponent } from './pages/pagina-log/pagina-log.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { VisionComponent } from './pages/vision/vision.component';
import { MisionComponent } from './pages/mision/mision.component';
import { PerfilComponent } from './pages/perfil/perfil.component';


const routes: Routes = [
  {path:'',component:PaginaLogComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'tienda',component:TiendaComponent},
  {path:'nosotros',component:NosotrosComponent},
  {path:'vision',component:VisionComponent},
  {path:'mision',component:MisionComponent},
  {path:'perfil', component:PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
