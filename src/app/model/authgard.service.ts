import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, 
  RouterStateSnapshot, Router } from '@angular/router';
import { FireLoginService } from './fire-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgardService implements CanActivate {

  constructor(private service: FireLoginService,
    private router: Router) { }
   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      
      const token = localStorage.getItem('token');
      if (token && this.service.validarToken()) {
        return true;
      } else {
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        return false;
      }
    }
}
