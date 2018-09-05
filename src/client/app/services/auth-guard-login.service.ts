import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuardLogin implements CanActivate {

  constructor(public auth: AuthService, private router: Router) {}

  async authenticationHandler(): Promise<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      // check valid token
      this.router.navigate(['/home']);
      return false;
    } else {
      return true;
    }
  }

  canActivate() {
    // return this.auth.loggedIn;
    return this.authenticationHandler()
  }

}
