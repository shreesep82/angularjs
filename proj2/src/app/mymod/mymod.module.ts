import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycompComponent } from './mycomp/mycomp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [MycompComponent],
  exports : [MycompComponent]
})
export class MymodModule { }
