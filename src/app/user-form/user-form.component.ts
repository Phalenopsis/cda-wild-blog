import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
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
  user!: User;

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  street = new FormControl('');
  zipCode = new FormControl('');
  city = new FormControl('');

  submit() {
    this.user = new User();
    this.user.username = this.username.value as string;
    this.user.email = this.email.value as string;
    this.user.password = this.password.value as string;
    this.user.adress.street = this.street.value as string;
    this.user.adress.zipCode = this.zipCode.value as string;
    this.user.adress.city = this.city.value as string;
  }
}
