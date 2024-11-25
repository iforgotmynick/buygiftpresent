import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SignUp } from '../../interface/sign-up.interface';

@Component({
  selector: 'lib-sign-up-modal',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
  ],
  templateUrl: './sign-up-modal.component.html',
  styleUrl: './sign-up-modal.component.scss',
})
export class SignUpModalComponent {
  @Output() readonly closeModal = new EventEmitter<SignUp | null>();

  readonly form = new FormGroup({
    username: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    email: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    about: new FormControl<string>('', {
      nonNullable: true,
    }),
    avatar: new FormControl<string>('', {
      nonNullable: true,
    }),
  });

  closeDialog(): void {
    this.closeModal.emit();
  }

  saveDialog(): void {
    if (this.form.invalid) {
      return;
    }

    this.closeModal.emit(this.form.getRawValue());
  }
}
