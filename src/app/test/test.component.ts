import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-test',  //by default use as root 
  // selector: '.app-test',  // use as class by putting . 
  selector: '[app-test]',   // use as attribute
  templateUrl: './test.component.html',  // points to file that content html
  // template: '<div>Inline template</div>',

  styleUrls: ['./test.component.css']
  // styles:[''] inline css
})
export class TestComponent implements OnInit {
  public name = "code with me anish";

  public siteUrl = window.location.href;  // creating new property 

  ngOnInit(): void {

  }

  greetUser() {
    return "Hello " + this.name;  //represent name property 
  }

}
