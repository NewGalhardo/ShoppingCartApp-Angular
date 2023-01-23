import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, DetachedRouteHandle, BaseRouteReuseStrategy} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AppRouteReuseStrategy implements BaseRouteReuseStrategy {
  public shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return (future.routeConfig === curr.routeConfig);
  }

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {}

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle|null {
    return null;
  }


}