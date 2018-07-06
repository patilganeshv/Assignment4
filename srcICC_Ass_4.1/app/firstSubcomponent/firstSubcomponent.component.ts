import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-firstSubcomponent',
  templateUrl: './firstSubcomponent.component.html',
  styleUrls: ['./firstSubcomponent.component.css']
})
export class firstSubcomponentComponent implements OnInit 
{
  // Add input decorator as it will receve the data from parent
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }

}
