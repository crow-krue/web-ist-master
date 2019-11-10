import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserStateService } from 'src/app/services/userState.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  alert = {
    isShow: false,
    type: '',
    message: ''
  }

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userStateService: UserStateService
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/[a-z, A-Z, 0-9]/)]],
    })
  }

  auth () {
    this.authService.login(this.loginForm.value).subscribe(users => {
      if (!users.length) {
        this.alert.message = 'This user not exist!';
        this.alert.type = 'warning';
        this.alert.isShow = true;
        return;
      }

      this.userStateService.setUser(users[0]);
      this.router.navigate(['/']);
    },
      error => {
        this.alert.message = error;
        this.alert.type = 'danger';
        this.alert.isShow = true;
        return;
      })
  }

  ngOnInit () {
  }

}
