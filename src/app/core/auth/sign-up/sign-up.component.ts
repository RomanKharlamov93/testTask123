import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../shared/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass'],
})
export class SignUpComponent implements OnInit {
  hide = true;
  form: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  constructor(private authService: AuthService) {
    this.form = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit(): void {}

  signUp() {
    this.authService.signUp(this.email.value, this.password.value);
  }
}
