import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'mc-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  public submitted = false;
  public showPassword = false;

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.setForm();
  }

  get form() {
    return this.signUpForm.controls;
  }

  private setForm() {
    this.signUpForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      userPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, {
      validator: MustMatch('userPassword', 'confirmPassword')
    });
  }

  signUp() {
    this.submitted = true;

    if (this.signUpForm.invalid) {
      return;
    }

    this.authService.SignUp(this.form.userName.value, this.form.userPassword.value).then(d => console.log(d));

  }


}

function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    // return if another validator has already found an error on the matchingControl
    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({mustMatch: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}
