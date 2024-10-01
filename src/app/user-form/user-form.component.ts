import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  formBuilder: FormBuilder = inject(FormBuilder);
  user!: User;

  userForm = this.formBuilder.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    adress: this.formBuilder.group({
      street: [''],
      zipCode: [''],
      city: ['']
    })
  });

  submit() {
    this.user = this.userForm.value as User;
  }
}
