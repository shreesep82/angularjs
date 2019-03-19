import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MymoduleModule } from './mymodule/mymodule.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HwComponent } from './hw/hw.component';
import { MycompComponent } from './mymodule/mycomp/mycomp.component';

@NgModule({
  declarations: [
    AppComponent,
    HwComponent,
    MycompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MymoduleModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
