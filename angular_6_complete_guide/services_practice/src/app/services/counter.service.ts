import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {
  activeCount = 0;
  inactiveCount = 0;

  activeUpCount() {
    this.activeCount++;
    console.log(`Active users to inactive users: ${this.activeCount}`); // call after count otherwise it will index at 0
  }
  inactiveUpCount() {
    this.inactiveCount++;
    console.log(`Inactive users to active users: ${this.inactiveCount}`); // call after count otherwise it will index at 0
  }

  constructor() {}
}
