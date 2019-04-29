import { Component } from '@angular/core';
import { myobservable } from './observable';
import { Subject, Observable, interval, timer } from 'rxjs'
import { map, filter, take, takeUntil } from 'rxjs/operators'
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observable';
  private my_observable_inst : myobservable = new myobservable()

  fun1() : number {
    return 208;
  }

  create_normal_observable : Observable = () => this.my_observable_inst.create_observable()
  
  constructor() {
    
    //let my_observable_inst = new myobservable();
    let my_observable$;
    //my_observable$.subscribe( value => console.log(value));
    my_observable$ = this.my_observable_inst.create_observable();

    my_observable$.subscribe( value => console.log(value));
    
    var subscription = my_observable$.subscribe( 
      value => console.log(value, document),
      error => console.log('error'),
      () => console.log('completed');
    );
    
    subscription.unsubscribe();
    //my_observable$.unsubscribe();

    console.log(my_observable$ | async);
    my_observable$
    .pipe(
            filter(value => {
              //console.log('filter value : ', value, ', value.indexOf(201) : ', value.indexOf(201));
              return value % 2 === 0;
            }), 
            map(value => {
              //console.log('map: instance of value : ', value[0]); 
              return value;
            })
    )
    .subscribe(v => console.log('filter, map : ', v));
    
    my_observable$
    .pipe(
            take(1)
    )
    .subscribe(v => console.log('take : ', v));

    let timer$ = timer(1000);
    my_observable$
    .pipe(
            takeUntil(timer$)
    )
    .subscribe(v => console.log('takeUntil : ', v, ' some value : ', '20');
    // ' fun : ', this.fun.toString().substring(this.fun.toString().indexOf('{'))));


    let my_bs$ = this.my_observable_inst.create_behavior_subject();
    my_bs$.subscribe( value => console.log(value));
    my_bs$.next(250);
    my_bs$.subscribe( value => console.log(value));
    my_bs$.subscribe( value => console.log(value + 1));
    my_bs$.next(500);

    let subject = new Subject();
    subject.subscribe( value => console.log(value) );
    subject.next(300);
    subject.next(550);
    subject.subscribe( value => console.log(value) );



  }

  
}
