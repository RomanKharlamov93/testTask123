import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass'],
})
export class SignInComponent implements OnInit {
  hide = true;
  form: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(public authService: AuthService) {
    this.form = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit(): void {}

  signIn() {
    this.authService.signIn(this.email.value, this.password.value);
  }
}
