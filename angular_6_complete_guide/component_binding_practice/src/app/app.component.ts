import { Component } from '@angular/core';
import { TimeInterval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  outputOdds: number[] = [];
  outputEvens: number[] = [];

  onIntervalStart(gameNum: number) {
    if (gameNum % 2 === 0) {
      this.outputEvens.push(gameNum);
    } else {
      this.outputOdds.push(gameNum);
    }
  }
}
