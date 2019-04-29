import { Observable, BehaviorSubject, Subject, from } from 'rxjs'


export class myobservable {
    

    constructor() {

 
    }

    fun() : number {
        return 208;
      }

    create_observable() {
        /*
        return new Observable( (observer) => {
            observer.next([200, 400])
            observer.complete();
            observer.next(2000)
        })
        */
       return from([200, 400, 800]);
    }
    
    create_behavior_subject () {
        return new BehaviorSubject(this.fun());
    }

    create_subject() {
        return new Subject();
    }
}