
import { Injectable }             from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
}                                 from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take }         from 'rxjs/operators';

import { CrisisService }  from './crisis.service';
import { Crisis } from './crisis';

import { of } from 'rxjs'; 
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrisisDetailResolverService implements Resolve<Crisis> {
  constructor(private cs: CrisisService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> | Observable<never> {
    let id = route.paramMap.get('id');

    console.log('get crises(id) : ', this.cs.getCrisis(id).pipe(take(2)));

    return this.cs.getCrisis(id).pipe(
      take(1),
      mergeMap(crisis => {
        if (crisis) {

/*
// lets create our data first
const data = of([
  {
    brand: 'porsche',
    model: '911'
  },
  {
    brand: 'porsche',
    model: 'macan'
  },
  {
    brand: 'ferarri',
    model: '458'
  },
  {
    brand: 'lamborghini',
    model: 'urus'
  }
]);

// get data as brand+model string. Result: 
// ["porsche 911", "porsche macan", "ferarri 458", "lamborghini urus"]
data
  .pipe(
    map(cars => {
      console.log('cars : ', cars);
      return cars.map(car => {
        return `${car.brand} ${car.model}`
      })
    }
  )).subscribe(cars => console.log(cars));
*/

          return of(crisis);
        } else { // id not found
          this.router.navigate(['/crisis-center']);
          return EMPTY;
        }
      })
    );
  }
}
