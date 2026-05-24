import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { CheckboxComponent, checkboxInerface } from 'src/app/shared/checkbox/checkbox.component';
import { InputComponent } from 'src/app/shared/input/input.component';
import { FieldInputInterface } from 'src/app/shared/input/input.interface';

@Component({
  selector: 'app-login',
  imports: [RouterLink, InputComponent, CommonModule, CheckboxComponent, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  emailInput: FieldInputInterface = {
    name: 'email',
    id: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'name@company.com',
    value: '',
    error: false,
    errorMessage: 'Please enter a valid email address.',
    required: true
  };

  passwordInput: FieldInputInterface = {
    name: 'password',
    id: 'password',
    label: 'Password',
    type: 'password',
    placeholder: 'Password',
    value: '',
    error: false,
    errorMessage: 'Please enter a valid email address.',
    required: true
  };

  checkboxInput: checkboxInerface = {
    name: 'remember_me',
    id: 'remember_me',
    label: 'Remeber Me',
    type: 'checkbox',
    value: false,
    error: false,
    errorMessage: 'Please enter a valid email address.',
    required: false
  };

  formGroup!: FormGroup;

  constructor(private _formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void{
     this.formGroup = this._formBuilder.group({
        email: new FormControl<string>('', [Validators.required, Validators.email]),
        password: new FormControl<string>('', [Validators.required]),
        rememberMe: new FormControl<boolean>(false)
    });
    this.emailInput.formControlName = 'email'
    this.passwordInput.formControlName = 'password'
    this.checkboxInput.formControlName = 'rememberMe'
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();

    const emailControl = this.formGroup.get('email');
    const passwordControl = this.formGroup.get('password');

    this.emailInput = {
      ...this.emailInput,
      error: !!emailControl?.invalid,
      errorMessage: emailControl?.hasError('email')
        ? 'Please enter a valid email address.'
        : 'This field is required',
    };

    this.passwordInput = {
      ...this.passwordInput,
      error: !!passwordControl?.invalid,
      errorMessage: 'This field is required',
    };

    if (this.formGroup.invalid) {
      return;
    }

    console.log(this.formGroup.value);
  }
}
