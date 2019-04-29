import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Comp5Component } from './comp5/comp5.component';
import { Comp6Component } from './comp6/comp6.component';

const mod2_routes : Routes = [
  { path : 'comp4/comp5', component : Comp5Component },
  { path : 'comp6', component : Comp6Component }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mod2_routes)
  ],
  declarations: []
})
export class Mod2RoutingModule { }
