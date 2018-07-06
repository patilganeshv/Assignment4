import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudents } from './IStudents';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService 
{
  // Add dependency in service constructor for httpclient 
  constructor(private http:HttpClient) 
 {

  }

  private _url:string = "/assets/data/student.json";

 // Write method in service class which returns array 
 // of batch details
 
 GetStudetDetails():Observable<IStudents[]>
{
  return this.http.get<IStudents[]>(this._url);
}

}
