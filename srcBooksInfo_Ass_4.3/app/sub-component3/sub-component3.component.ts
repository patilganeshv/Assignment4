import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-sub-component3',
  templateUrl: './sub-component3.component.html',
  styleUrls: ['./sub-component3.component.css']
})
export class SubComponent3Component implements OnInit 
{
  // Create empty array to hold the book details
  public books = [];

  // Add the instance of service in side constructor
  constructor(private _bookservice: BookService)
  {

  }

  // call the service method once in ngOnInit method
  ngOnInit() 
  {
    this.books = this._bookservice.GetBookDetails();
  }

}
