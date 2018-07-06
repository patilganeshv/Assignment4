import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService 
{
 constructor() { }

 
GetBookDetails()
{
  return [
    {"Name":"C", "Price":501, "Author":"Ajay Mittal","NoofPages":211},
    {"Name":"C++", "Price":601, "Author":"Bruce Ekle","NoofPages":251},
    {"Name":"Java", "Price":651, "Author":"Nageshrao","NoofPages":301},
    {"Name":"PHP", "Price":701, "Author":"ABC","NoofPages":351},
        ];
}

}
