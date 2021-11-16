import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {

  private roles=sessionStorage.getItem('role');

  constructor(private router: Router,
    private authService: AuthenticationService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isUserLoggedIn()){

      if (route.data.role && route.data.role.indexOf(this.roles)===-1){
        this.router.navigate(['']);
        return false;
      }
      return true;
    }
      

    this.router.navigate(['login']);
    return false;

  }
}
