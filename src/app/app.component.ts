import { Component } from '@angular/core';
declare let alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practise1';

  // public name = 'anish';
  public color = "red";
  public message = '';
}