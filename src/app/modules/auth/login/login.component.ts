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

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required, Validators.pattern(/[a-z, A-Z, 0-9]/)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/[a-z, A-Z, 0-9]/)]],
    })
  }

  auth () {
    this.authService.login(this.loginForm.value).then(res => {
      console.log(res);
    })
  }

  ngOnInit () {
  }

}
