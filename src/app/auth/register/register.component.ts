import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from "@angular/router";
import { CheckboxComponent, checkboxInerface } from 'src/app/shared/checkbox/checkbox.component';
import { InputComponent } from 'src/app/shared/input/input.component';
import { FieldInputInterface } from 'src/app/shared/input/input.interface';

@Component({
  selector: 'app-register',
  imports: [RouterLink, CommonModule, FormsModule, ReactiveFormsModule, InputComponent, CheckboxComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
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
    errorMessage: 'Please enter a Password',
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
    console.log(!!emailControl?.invalid ||  !!emailControl?.hasError('email'))

    this.emailInput = {
      ...this.emailInput,
      error: !!emailControl?.invalid ||  !!emailControl?.hasError('email'),
      errorMessage: emailControl?.hasError('email')
        ? 'Please enter a valid email address.'
        : 'This field is required',
    };

    console.log(emailControl?.hasError('email'));

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
