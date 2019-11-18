import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserStateService } from "src/app/services/userState.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.css"]
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  alert = {
    isShow: false,
    type: "",
    message: ""
  };
  private isLoading = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private userStateService: UserStateService
  ) {
    this.registerForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.pattern(/[a-z, A-Z, 0-9]/)]],
      email: ["", [Validators.email, Validators.required]],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/[a-z, A-Z, 0-9]/)
        ]
      ],
      confirmPassword: [
        "",
        [
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(/[a-z, A-Z, 0-9]/)
        ]
      ]
    });
  }

  isInvalidConfirmPassword(): boolean {
    return (
      this.registerForm.value.password !==
      this.registerForm.value.confirmPassword
    );
  }

  ngOnInit() {}

  submitForm() {
    this.isLoading = true;

    this.authService
      .getByEmail(this.registerForm.controls.email.value)
      .subscribe(
        users => {
          if (users.length) {
            this.alert.message = "This user already exist!";
            this.alert.type = "warning";
            this.alert.isShow = true;
            return;
          }

          this.authService.register(this.registerForm.value).subscribe(user => {
            this.isLoading = false;
            this.userStateService.setUser(user);

            this.router.navigate(["/"]);
          });
        },
        error => {
          this.alert.message = error;
          this.alert.type = "danger";
          this.alert.isShow = true;
          return;
        }
      );
  }
}
