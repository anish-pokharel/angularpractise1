import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import * as alertify from 'alertifyjs';
declare let alertify: any;


@Component({
  selector: 'app-test',  //by default use as root 
  // selector: '.app-test',  // use as class by putting . 
  // selector: '[app-test]',   // use as attribute
  templateUrl: './test.component.html',  // points to file that content html
  // template: '<div>Inline template</div>',
  // template: `<h2 class="text-success">anish</h2>


  // `,

  styleUrls: ['./test.component.css']
  // styles:[''] inline css
  // styles: [`
  // .text-success{
  //   color-green;

  // }
  // .text-danger{
  //   color:red;
  // }
  // .text-special{
  //   font-style:italic;
  // }

  // `]

})
export class TestComponent implements OnInit {
  // @Input() public parentColor: any;

  // @Input('parentData') public name: any;
  @Input('parentColor') public color: any;

  @Output() public childEvent = new EventEmitter();


  // properties
  // public name = "code with me anish";
  // public myId = "testId";
  // public isDisabled = false;
  // public siteUrl = window.location.href;  // creating new property 
  // public sucessClass = "text-success";
  // public sucessClass = "text-success";
  // public hasError = true;
  // public isSpecial = true;
  // public hasError = false;

  // public messgaeClasses = {
  //   "text-success": !this.hasError,
  //   "text-danger": this.hasError,
  //   "text-special": this.isSpecial
  // }
  // public greeting = "";

  // public name = '';
  // displayName = true; //=> shows the name 



  // displayName = true;

  // public colors = ["red", "blue", "green", "yellow"];

  public name = 'anish';
  public message = 'code with anish';
  public person = {
    "firstName": "anish",
    "lastName ": "pokharel"
  }
  public date = new Date();


  constructor() { }
  ngOnInit(): void {

  }

  fireEvent() {
    this.childEvent.emit('hey anish ');
  }

  // greetUser() {
  //   return "Hello " + this.name;  //represent name property 
  // }
  // onClick(event: Event) {
  //   console.log(event);
  //   this.greeting = event.type;
  // }

  // logMessage(value: any) {
  //   console.warn(value)
  // }
}