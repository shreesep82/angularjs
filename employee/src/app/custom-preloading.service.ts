import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomPreloadingService implements preloadingStrategy {

  preload(route : Route, fn : () => Observable<any>) : Observable<any> {
    if(route.data && route.data['preload']) {
      return fn();
    }
    else {
      return of(null);
    }
  }

  constructor() { }
}
