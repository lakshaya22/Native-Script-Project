import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import * as Calendar from "nativescript-calendar";
var applicationSettingModule= require("application-settings");


@Component({
  selector: "my-app",
  providers: [UserService],
  templateUrl: "pages/login/login.html",
  styleUrls: ["pages/login/login-common.css"]
})

export class LoginComponent {
  user: User;
  isLoggingIn = true;

  constructor(private router: Router, private userService: UserService) {
  this.user = new User();
  this.user.email = applicationSettingModule.getString("email","user@byg.co.in");
  this.user.password = "password";
  // example for listCalendars: 

}
 submit() {
  if (this.isLoggingIn) {
    this.login();
  } else {
    this.signUp();
  }
}
login() {

this.router.navigate(["/tabs"]);

}

signUp() {
  this.userService.register(this.user)
    .subscribe(
      () => {
        alert("Your account was successfully created.");
        this.toggleDisplay();
      },
      () => alert("Unfortunately we were unable to create your account.")
    );
}
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}