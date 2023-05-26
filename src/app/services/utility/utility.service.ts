import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  userLoggedIn : Subject<boolean>;
  itemDeleted:Subject<string>;
  

  constructor() { 
    this.userLoggedIn = new Subject<boolean>();
    this.itemDeleted = new Subject<string>();
  }
}
