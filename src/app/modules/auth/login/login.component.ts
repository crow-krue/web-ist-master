import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  //private isDisableRegisterButton = true;
  //private isLoading = false;

  // createForm() {
  //   this.loginForm = this.formBuilder.group({
  //     email: ['', [Validators.email, Validators.required, Validators.pattern(/[a-z, A-Z, 0-9]/)]],
  //     password: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/[a-z, A-Z, 0-9]/)]],
  //   });
  // }

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    // this.createForm();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required, Validators.pattern(/[a-z, A-Z, 0-9]/)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/[a-z, A-Z, 0-9]/)]],
    })
  }

  auth () {
    console.log("TCL: LoginComponent -> auth -> auth")

  }

  ngOnInit () {
  }

}
