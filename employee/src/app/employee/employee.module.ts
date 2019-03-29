import { NgModule } from '@angular/core';



import { EmployeeRoutingModule } from './employee-routing.module';

import { CreateemployeeComponent } from './createemployee.component';
import { ListemployeeComponent } from './listemployee.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    EmployeeRoutingModule,
    SharedModule
  ],
  declarations: [
    CreateemployeeComponent,
    ListemployeeComponent
  ]
})
export class EmployeeModule { }
