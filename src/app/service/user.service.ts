import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class UserService {
  private userDataSource = new BehaviorSubject({email : '', password : ''});
  currentUserData = this.userDataSource.asObservable();
  constructor() { }
  changeData(newUserData) {
    this.userDataSource.next(newUserData)
  }
}