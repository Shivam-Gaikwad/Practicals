import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Registration form';

  displayname = ' ';
  displayAddress = ' ';
  displayContact = ' ';
  displayemail = ' ';

  submitForm(name:string,Address:string,Contact:string,email:string){
    this.displayname = name;
    this.displayAddress = Address;
    this.displayContact = Contact;
    this.displayemail = email;

  }
}
