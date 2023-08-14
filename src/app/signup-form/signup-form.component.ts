import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from '../services/api/api.service';
import { UtilityService } from '../services/utility/utility.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  isLoading:boolean = false;
  signupForm:UntypedFormGroup = new UntypedFormGroup({

  });

  selectedAdminType:any;

  constructor(private apiService:ApiService , private utilityService:UtilityService,private toastr:ToastrService){}

  ngOnInit()
  {
    this.utilityService.userLoggedIn.next(false);
    this.signupForm = new UntypedFormGroup({
      'username' : new UntypedFormControl(null), 
      'password' : new UntypedFormControl(null),
    });
    this.isLoading = false;
  }

  onSubmit()
  {
    this.isLoading = true;
    this.apiService.signup(this.signupForm.value , this.selectedAdminType).subscribe(()=>{
      this.signupForm.reset();
      this.isLoading = false;
      this.toastr.success('Signed Up Successfully , Please login', 'Notification!' , {
        timeOut : 4000 ,
        closeButton : true , 
        positionClass : 'toast-top-right'
      });

    })
  }

}
