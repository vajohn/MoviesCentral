import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mc-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  public submitted = false;
  public showPassword = false;

  constructor(
    public authService: AuthService,
    private formBuilder: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.setForm();
    console.log( this.authService.userData.uid);

  }

  get form() {
    return this.signInForm.controls;
  }

  private setForm() {
    this.signInForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      userPassword: ['', [Validators.required]],

    });
  }

  public signIn() {
    this.submitted = true;

    if (this.signInForm.invalid) {
      return;
    }

    this.authService.SignIn(this.form.userName.value, this.form.userPassword.value).then(d => console.log(d));
  }
}
