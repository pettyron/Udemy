import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numsObserveSubscription: Subscription;
  customObserveSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = interval(1000)
      .pipe(
        map((data: number) => data * 2)
      );
    this.numsObserveSubscription = myNumbers.subscribe(
      (number: number) => {
        console.log(`number is: ${number}`);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('This does not work!');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });

    this.customObserveSubscription = myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );
  }

  ngOnDestroy() {
    this.numsObserveSubscription.unsubscribe();
    this.customObserveSubscription.unsubscribe();
  }

}
