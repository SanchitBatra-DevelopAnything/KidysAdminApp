import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api/api.service';
import { UtilityService } from '../services/utility/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLoading:boolean = false;
  admins : any = [];
  loginForm:UntypedFormGroup = new UntypedFormGroup({

  });

  constructor(private apiService:ApiService , private utilityService:UtilityService , private router:Router) { }

  ngOnInit(): void {
    this.utilityService.userLoggedIn.next(false);
    this.loginForm = new UntypedFormGroup({
      'username' : new UntypedFormControl(null), 
      'password' : new UntypedFormControl(null)
    });
    this.getAdmins();
  } 

  getAdmins() : void
  {
    this.isLoading = true;
    this.apiService.getAdmins().subscribe((adminData)=>{
      if(adminData == null)
      {
        this.admins = [];
        this.isLoading = false;
      }
      this.admins = adminData;
      this.isLoading = false;
    });
  }

  onSubmit()
  {
    let adminIndex = this.isAdminRegistered(this.loginForm.value.username);
    let arr : {username : string , password : string}[];
    arr = Object.values(this.admins);
    if(adminIndex!=-1)
    {
      if(arr[adminIndex].password != this.loginForm.value.password)
      {
        alert('invalid password');
        return;
      }
      this.loginSuccessfull();
    }
    else
    {
      alert('Sorry , you are not registered!');
    }
  }

  isAdminRegistered(adminName:string) : number
  {
    let arr : {username : string , password : string}[];
    arr = Object.values(this.admins);
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i].username.trim() == adminName.trim())
      {
        return i;
      }
    }
    return -1;
  }

  loginSuccessfull()
  {
    sessionStorage.setItem("loggedInUser" , this.loginForm.value.username);
    sessionStorage.setItem("loggedIn" , "true");
    this.utilityService.userLoggedIn.next(true); //inform app component ki header on kardo.
    this.router.navigate(['/categories']);
  }



}
