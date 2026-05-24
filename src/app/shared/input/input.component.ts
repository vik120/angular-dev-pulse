import { Component, Input, OnInit } from '@angular/core';
import { FieldInputInterface } from './input.interface';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
})

export class InputComponent implements OnInit {
  private readonly _blankInput: FieldInputInterface = {
    name: '',
    id: '',
    label: '',
    type: 'text',
    placeholder: '',
    value: '',
    error: false,
    errorMessage: '',
    required: false,
    formControlName: '',
  };

  @Input() fieldInput: FieldInputInterface = this._blankInput;
  @Input({ required: true }) formGroup!: FormGroup;

  get controlName(): string {
    return this.fieldInput.formControlName ?? this.fieldInput.name;
  }

  constructor() {}

  ngOnInit() {}
}
