import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { firstSubcomponentComponent } from './firstSubcomponent/firstSubcomponent.component';
import { SecondSubcomponentComponent } from './SecondSubcomponent/SecondSubcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    firstSubcomponentComponent,
    SecondSubcomponentComponent,
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
