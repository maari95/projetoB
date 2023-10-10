import { Component, OnInit } from '@angular/core';
// import { LoginService } from 'src/app/model/login.service';
import { Router } from '@angular/router';
// import { TokenService } from 'src/app/model/token.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from 'src/app/model/auth.service';
import { CadastroService } from 'src/app/model/cadastro.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string='';
  senha: string='';
  mensagem: string='';

  constructor(private auth: AngularFireAuth,
    private router:Router, 
    private  authService: AuthService, 
    private cadastro: CadastroService){}

  async login(){
    try{
      const userCredential = await this.auth.signInWithEmailAndPassword(
        this.email,
        this.senha
    );
    if (userCredential.user){
      this.authService.login();
      /* console.log(userCredential.user.uid); */
      localStorage.setItem('id',userCredential.user.uid);
      this.mensagem = 'sucesso';
      this.router.navigate(['/']);

    }  
  }catch(error){
    console.error('Erro ao fazer login', error);
    this.mensagem='Erro ao fazer login';
  }
 }
    
 //  METODO PARA DESLOGAR
 async logout(){
  try{
    this.auth.signOut();
    this.cadastro.logout();
    
    this.router.navigate(['/'])
  }catch(error){
    console.error('Erro ao fazer logout', error);
  }
 }
}


  //   if(this.email && this.senha){
  //     this.service.login(this.email,this.senha).then(
  //       (        result: { user: any; }) => {
  //         this.tokenService.enviarToken(this.email)
  //         console.log('Usuario logado', result.user)
  //         this.router.navigate(['/'])
  //       }
  //     ).catch(
  //       (        error: any) => {
  //         console.log('Erro ao fazer login',error);
  //         this.mensagem="Erro ao fazer login. Verifique suas credenciais"
  //       }
  //     )
  //   }else{
  //     this.mensagem='Por favor, preencha todos os campos';
  //   }
  // }
