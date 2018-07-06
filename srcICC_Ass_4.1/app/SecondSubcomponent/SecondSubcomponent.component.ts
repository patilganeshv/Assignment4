import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-SecondSubcomponent',
  templateUrl: './SecondSubcomponent.component.html',
  styleUrls: ['./SecondSubcomponent.component.css']
})
export class SecondSubcomponentComponent implements OnInit 
{
  // Create object of event class
  @Output() public MyEvent = new EventEmitter();
 
  // Action listener for button
  public SendEvent()
  {
    // Send the event to parent
    this.MyEvent.emit('Message from Child : Hello Parent Component');
  }
  constructor() { }

  ngOnInit() {
  }

}
