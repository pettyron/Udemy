import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) // be careful with provide in root it makes the service available at the root level
export class UsersService {
  userActivated = new Subject();

  constructor() { }
}
