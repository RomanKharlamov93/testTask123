import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    const user = localStorage.getItem('fb-user-email');
    if (user) {
      return true;
    } else {
      this.router.navigate(['auth'], {
        queryParams: {
          auth: false
        }
      });
      return false;
    }
  }

}
