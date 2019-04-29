import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Comp5Component, Comp6Component]
})
export class Mod2Module { }
