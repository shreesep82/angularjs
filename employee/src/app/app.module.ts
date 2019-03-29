import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';
//
import { EmployeeService } from './employee/employee.service';

import { AppComponent } from './app.component';



import { HomeComponent } from './home.component';
import { PagenotfoundComponent } from './pagenotfound.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //EmployeeModule,
    AppRoutingModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
