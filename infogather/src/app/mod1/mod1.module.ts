import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { Mod2RoutingModule } from '../mod2/mod2-routing.module';

import { Mod2Module } from '../mod2/mod2.module';

import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { Comp3Component } from './comp3/comp3.component';
import { Comp4Component } from './comp4/comp4.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    Mod2Module,
    Mod2RoutingModule
  ],
  declarations: [Comp1Component, Comp2Component, Comp3Component, Comp4Component],
  exports : [Comp1Component]
})
export class Mod1Module { }
