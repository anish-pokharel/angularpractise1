import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test',  //by default use as root 
  // selector: '.app-test',  // use as class by putting . 
  selector: '[app-test]',   // use as attribute
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
  // properties
  // public myId = "testId";
  // public isDisabled = false;
  // public siteUrl = window.location.href;  // creating new property 
  // public sucessClass = "text-success";
  public name = "code with me anish";
  public sucessClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  // public hasError = false;

  public messgaeClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }





  constructor() { }


  ngOnInit(): void {

  }

  // greetUser() {
  //   return "Hello " + this.name;  //represent name property 
  // }

}
