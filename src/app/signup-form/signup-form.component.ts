import { Component } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {

  isLoading:boolean = false;

  onSubmit()
  {

  }

  loginForm:UntypedFormGroup = new UntypedFormGroup({

  });

}
