import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../services/utility/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn = true;

  constructor(private utilityService:UtilityService) { }

  ngOnInit(): void {
  }

  onLogout()
  {
    sessionStorage.clear();
    this.loggedIn = false;
    this.utilityService.userLoggedIn.next(false); //inform app component to delete header.
  }

}
