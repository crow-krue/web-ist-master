import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;

  private isLoading = false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(/[a-z, A-Z, 0-9]/)]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/[a-z, A-Z, 0-9]/)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/[a-z, A-Z, 0-9]/)]],
    });
  }

  isInvalidConfirmPassword (): boolean {
    return this.registerForm.value.password !== this.registerForm.value.confirmPassword;
  }

  ngOnInit () { }

  reset (): void {
    this.registerForm.value.name = '';
    this.registerForm.value.email = '';
    this.registerForm.value.password = '';
    this.registerForm.value.confirmPassword = '';
  }

  async submitForm () {
    this.isLoading = true;

    try {
      const response = await this.authService.register({
        name: this.registerForm.value.name,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
      });
      this.reset();
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        this.isLoading = false;
      }, 3000);
    }
  }
}
