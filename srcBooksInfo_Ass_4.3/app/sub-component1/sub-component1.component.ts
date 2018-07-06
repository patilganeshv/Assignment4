import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-sub-component1',
  templateUrl: './sub-component1.component.html',
  styleUrls: ['./sub-component1.component.css']
})
export class SubComponent1Component implements OnInit 
{
  // Create array to hold the information of batches
  public books = [];

  // Add instance of Service in constructor
  constructor(private _bookservice:BookService)
  {
  }

  // Call the service method once
  ngOnInit() 
  {
    this.books = this._bookservice.GetBookDetails();
  }
}
