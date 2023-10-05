import { FaqComponent } from './page/faq/faq.component';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { PerfilComponent } from './page/perfil/perfil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { EnvioComponent } from './page/envio/envio.component';
import { AuthgardService } from './model/authgard.service';
import { SobreComponent } from './page/sobre/sobre.component';




const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},

  {path:'enviar', component:EnvioComponent,/*  canActivate:[AuthgardService] */},
  {path: 'sobre', component:SobreComponent,/*  canActivate:[AuthgardService] */},
  {path:'faq', component:FaqComponent},
  {path:'perfil', component:PerfilComponent},
  {path:'cadastro', component:CadastroComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
