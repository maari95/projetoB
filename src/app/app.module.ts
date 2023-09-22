import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { HomeComponent } from './page/home/home.component';

import { RodapeComponent } from './sharepage/rodape/rodape.component';
import { EnvioComponent } from './page/envio/envio.component';

import { NoticiasComponent } from './page/noticias/noticias.component';
import {AngularFireModule} from '@angular/fire/compat';

import { configuracao } from './configuracao';
import { LoginComponent } from './page/login/login.component';

import { FormsModule } from '@angular/forms';
import { SobreComponent } from './page/sobre/sobre.component';
import { ChatComponent } from './page/chat/chat.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RodapeComponent,
    EnvioComponent,
    NoticiasComponent,
    LoginComponent,
    SobreComponent,
    ChatComponent
    
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(configuracao),
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
