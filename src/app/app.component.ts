import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  messages: string[] = [
    'Hello world', 
    'Have a nice day', 
    'Nice to see you'
  ];
}
