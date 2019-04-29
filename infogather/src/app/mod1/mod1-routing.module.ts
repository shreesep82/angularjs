import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';

const mod1_routes : Routes = [
  { path : 'comp2', component : Comp2Component },
  { path : 'comp3', component : Comp3Component },
  { path : 'comp4', component : Comp4Component }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mod1_routes)
  ],
  declarations: [],
  exports : []
})
export class Mod1RoutingModule { }
