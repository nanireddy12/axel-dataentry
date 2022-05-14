import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceGuard implements CanActivate {
  role:any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      this.role=sessionStorage.getItem('role');
      if(this.role=='admin')
    return true;
    else{
      alert('you are not authorized');
      return false;
    }
  }

}
