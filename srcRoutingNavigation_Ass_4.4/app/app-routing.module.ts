import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { componentFactoryName } from '@angular/compiler';
import { SubjectsComponent } from './subjects/subjects.component';
import { InvalidPageComponent } from './invalid-page/invalid-page.component';
import { AppComponent } from './app.component';
import { DatabaseComponent } from './database/database.component';

//Array of Routes in application
const routes: Routes = [
  {path : 'os', component:BatchesComponent},
  {path : 'programing' ,component:SubjectsComponent},
  {path : 'database' ,component:DatabaseComponent},
  //Add on default path1
  { path: '', component:BatchesComponent},
  // It is our Widcard component
  {path : '**', component:InvalidPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
