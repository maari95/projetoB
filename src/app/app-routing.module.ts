import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { EnvioComponent } from './page/envio/envio.component';
import { NoticiasComponent } from './page/noticias/noticias.component';
import { AuthgardService } from './model/authgard.service';
import { SobreComponent } from './page/sobre/sobre.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'enviar', component:EnvioComponent, canActivate:[AuthgardService]},
  {path:'noticias', component:NoticiasComponent, canActivate:[AuthgardService]},
  {path: 'sobre', component:SobreComponent, canActivate:[AuthgardService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
