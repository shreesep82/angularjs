import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycompComponent } from './mycomp/mycomp.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MycompComponent],
  exports : [MycompComponent]
})
export class MymoduleModule { }
