import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class UserService {

  currentUser: BehaviorSubject<User> = new BehaviorSubject(undefined);

  constructor() {
    this._init();
  }

  _init(): void {
    Observable.of({
      name: 'Val le Nain',
      email: 'vallenain@example.com',
      picture: 'http://s2.dmcdn.net/B4D0w/240x240-A66.jpg',
      description: 'Yet another nain (from Lyon)'
    }).subscribe(user => this.currentUser.next(user));
  }
}

export interface User {
  name: string;
  email: string;
  picture?: string;
  description?: string;
}
