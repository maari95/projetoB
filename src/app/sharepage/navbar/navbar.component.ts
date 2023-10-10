import { Component } from '@angular/core';
import { AuthService } from 'src/app/model/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/page/login/login.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  constructor(private service: AuthService, private router: Router) {}

  isLoggedIn=false;

  toggleLogin(){
    
    this.isLoggedIn=!this.isLoggedIn;
  }
  logout() {
    this.isLoggedIn = false;
  }

  // sair(){
  //   this.service.sair();
  //   localStorage.removeItem('id');
  //   this.router.navigate(['/login']);
  // }
  
  // getAuthService() {
  //   return this.service.getAuth();
  // }

}
