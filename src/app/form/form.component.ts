import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Message } from '../models/message.type';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  newMessage: Message = {
    lastname: "",
    firstname: "",
    email: "",
    content: ""
  };

  onSubmit() {
    console.log(this.newMessage);
  }

}
