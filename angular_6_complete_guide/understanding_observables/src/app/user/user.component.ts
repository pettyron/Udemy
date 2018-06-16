import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  id: number;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
        }
      );
  }

  onActivate() {
    this.usersService.userActivated.next(this.id);
  }

  ngOnDestroy() {
    // this.usersService.userActivated.unsubscribe();
    // console.log(`Destroyed id: ${this.id} and unsubscribed is ${this.usersService.userActivated.isStopped}`);
  }

}
