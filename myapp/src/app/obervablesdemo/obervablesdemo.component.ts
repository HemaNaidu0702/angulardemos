import { Component, OnInit, OnDestroy } from '@angular/core';
import {interval, Subscription, Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-obervablesdemo',
  templateUrl: './obervablesdemo.component.html',
  styleUrls: ['./obervablesdemo.component.css']
})
export class ObervablesdemoComponent implements OnInit, OnDestroy {

  constructor() { }
private intervalSubscription: Subscription;
private customObservableSubscription: Subscription;

  ngOnInit(): void {
    // this.intervalSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        count++;
        if(count == 21) {
          observer.complete();
        }
        // if(count > 10) {
        //   observer.error(new Error('count > 10'));
        // }
      }, 1000);
     });
    
     this.customObservableSubscription = customObservable
      .pipe(
        filter(( data:number) => {
          return data % 2 ==0;
        }),
        map((data:number) => {
          return 'B' + data;
        })
      )
      
      
      .subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        alert(error.message);
      },
      () => {
        console.log('completed');
      }
      );
  }





  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
    this.customObservableSubscription.unsubscribe();
  }
}
