import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { Mod1RoutingModule } from './mod1/mod1-routing.module';

import { Mod1Module } from './mod1/mod1.module';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    Mod1Module,
    Mod1RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
