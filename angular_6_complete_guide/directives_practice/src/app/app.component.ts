import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  seeMe = false;
  clickLog = [];

  onSetDisplay() {
    this.seeMe = !this.seeMe;
    // this.clickLog.push(this.clickLog.length + 1);
    this.clickLog.push(new Date());
  }
}
