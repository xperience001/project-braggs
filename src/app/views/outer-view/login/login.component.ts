import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authservice/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  submitted = false;
  loader = false;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(
    private authService: AuthService,
    private route: Router,
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.loader = true;
    console.log(this.loginForm.value);
    setTimeout(() => {
      this.loader = false;
    }, 2000);

  }
}
