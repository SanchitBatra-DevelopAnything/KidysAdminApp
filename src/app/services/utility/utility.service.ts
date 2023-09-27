import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  userLoggedIn : Subject<boolean>;
  itemDeleted:Subject<string>;
  itemEditted:Subject<string>;
  areaAdded:Subject<string>;
  skippedMaintenance:Subject<boolean>;
  

  constructor() { 
    this.userLoggedIn = new Subject<boolean>();
    this.itemDeleted = new Subject<string>();
    this.itemEditted = new Subject<string>();
    this.areaAdded = new Subject<string>();
    this.skippedMaintenance = new Subject<boolean>();
  }
}
