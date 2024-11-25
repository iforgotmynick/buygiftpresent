import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'lib-sign-in-modal',
  standalone: true,
  imports: [CommonModule, ButtonModule, ReactiveFormsModule, InputTextModule],
  templateUrl: './sign-in-modal.component.html',
  styleUrl: './sign-in-modal.component.scss',
})
export class SignInModalComponent {
  @Output() readonly closeModal = new EventEmitter<{username: string, password: string} | null>();

  readonly form = new FormGroup({
    username: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
    password: new FormControl<string>('', { nonNullable: true, validators: Validators.required }),
  })
  
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
