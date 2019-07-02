import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService, LoginInput, LoginResult } from "../core/services/auth.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {

  username = new FormControl("");
  password = new FormControl("");
  rememberMe = new FormControl("");
  constructor(private authService: AuthService, private router: Router) {

  }

  ngOnInit() {
    console.log("%c started", "color:green")
  }

  login() {
    let input: LoginInput = {
      password: this.password.value,
      remeberMe: this.rememberMe.value,
      username: this.username.value
    };
    console.info(input);
    this.authService.login(input).subscribe((response: LoginResult) => {
      console.log(response);
      if (response.isSuccess) {
        this.router.navigate(['/']);
      }
    });
  }

}
