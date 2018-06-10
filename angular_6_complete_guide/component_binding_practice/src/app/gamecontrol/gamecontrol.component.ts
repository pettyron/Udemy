import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.scss']
})
export class GamecontrolComponent implements OnInit {
  @Output() gameIntervalStart = new EventEmitter<number>();
  gameInterval;
  countNum = 0;
  onGameStart() {
    // this.gameNum = 1;
    this.gameInterval = setInterval(() => {
      this.gameIntervalStart.emit(this.countNum + 1);
      this.countNum++;
    }, 1000);
  }

  onGameEnd() {
    clearInterval(this.gameInterval);
  }

  constructor() { }

  ngOnInit() {
  }

}
