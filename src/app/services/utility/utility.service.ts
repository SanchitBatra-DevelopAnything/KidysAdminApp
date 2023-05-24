import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  userLoggedIn : Subject<boolean>;

  constructor() { 
    this.userLoggedIn = new Subject<boolean>();
  }
}
