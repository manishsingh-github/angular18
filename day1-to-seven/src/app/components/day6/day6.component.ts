import { Component, OnDestroy } from '@angular/core';
import { interval, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'st-day6',
  standalone: true,
  imports: [],
  templateUrl: './day6.component.html',
  styleUrl: './day6.component.scss'
})
export class Day6Component implements OnDestroy {
  count=0;
  private timerSubscription!:Subscription;

  ngOnDestroy(): void {
      this.stopTimer();
  }

  startTimer(){
    console.log("Counting started");    
    this.timerSubscription = interval(1000).subscribe(()=>{
      this.count++;
      console.log("Count:", this.count);
    }) 
  }

  stopTimer(){
    if(this.timerSubscription){
      this.timerSubscription.unsubscribe();
      console.log("Timer Stopped at count: ", this.count);
    }
  }


}
