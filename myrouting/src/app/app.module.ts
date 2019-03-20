import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NorouteComponent } from './noroute/noroute.component';
import { View11Component } from './view11/view11.component';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    NorouteComponent,
    View11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
