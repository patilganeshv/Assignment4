import { Component,OnInit } from '@angular/core';
import {StudentService} from './student.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  StudentDetails=[];
  dispStudent=false;
  constructor(private _studentservice:StudentService){

  }

   ngOnInit()
  {
    this._studentservice.GetStudetDetails().
    subscribe(data=>this.StudentDetails=data)

  }
  displayStudentData()
  {
    this.dispStudent = true;
  }

}
