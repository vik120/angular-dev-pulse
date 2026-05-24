import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup } from '@angular/forms';

export interface checkboxInerface{
  name: string,
  value: boolean,
  id: string,
  label?: string,
  error: boolean,
  errorMessage: string,
  required: boolean,
  type: string,
  formControlName?: string
}

@Component({
  selector: 'app-checkbox',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css',
})
export class CheckboxComponent {
  private readonly _initialCheckboxInput: checkboxInerface= {
    name: '',
    value: false,
    required: false,
    error: false,
    errorMessage: '',
    id: '',
    label: '',
    type: '',
    formControlName: ''
  }
  @Input() checkboxInput: checkboxInerface = this._initialCheckboxInput;
  @Input({ required: true }) formGroup!: FormGroup;

  get controlName(){
    return this.checkboxInput.formControlName || this.checkboxInput.name
  }
}
