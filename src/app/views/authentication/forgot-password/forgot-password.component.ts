import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../services/auth/auth.service';

@Component({
  selector: 'mc-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  public submitted = false;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }
  ngOnInit(): void {
    this.setForm();
  }

  get form() {
    return this.resetPasswordForm.controls;
  }

  private setForm() {
    this.resetPasswordForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
    });
  }

  resetPassword() {
    this.submitted = true;

    if (this.resetPasswordForm.invalid) {
      return;
    }

    this.authService.ForgotPassword(this.form.userName.value).then(d => console.log(d));

  }

}
