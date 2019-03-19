import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MymodModule } from './mymod/mymod.module';

import { AppComponent } from './app.component';
import { MyserviceService } from './myservice.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MymodModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
