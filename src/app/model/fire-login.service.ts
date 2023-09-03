import { Injectable } from '@angular/core';
import { AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FireLoginService {

  constructor(private autenticar: AngularFireAuth) { }

  login(email: string, senha:string){
    return this.autenticar.signInWithEmailAndPassword(email,senha);
  }

  /*registro(email:string,senha:string){
    return this.autenticar.createUserWithEmailAndPassword(email,senha)
  }*/

  validarToken():boolean{
    const token = localStorage.getItem('token');
    const expiracao = localStorage.getItem('expiracao');
    if(!token || !expiracao){
      return false;
    }
    return new Date() < new Date(expiracao);
  }

  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('expericao')
    return this.autenticar.signOut();
  }
}
