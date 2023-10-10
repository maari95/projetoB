import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';

import { RodapeComponent } from './sharepage/rodape/rodape.component';
import { EnvioComponent } from './page/envio/envio.component';

import {AngularFireModule} from '@angular/fire/compat';

import { configuracao } from './configuracao';
import { LoginComponent } from './page/login/login.component';

import { FormsModule } from '@angular/forms';
import { SobreComponent } from './page/sobre/sobre.component';
import { PerfilComponent } from './page/perfil/perfil.component';
import { FaqComponent } from './page/faq/faq.component';
import { CadastroComponent } from './page/cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RodapeComponent,
    EnvioComponent,
    LoginComponent,
    SobreComponent,
    PerfilComponent,
    FaqComponent,
    CadastroComponent,
    ModalComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(configuracao),
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule, 
    MatButtonModule, 
    MatIconModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
