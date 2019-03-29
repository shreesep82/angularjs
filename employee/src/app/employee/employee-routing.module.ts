import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateemployeeComponent } from './createemployee.component';
import { ListemployeeComponent } from './listemployee.component';


const routes: Routes = [

	     { path : '', component : ListemployeeComponent },
	     { path : 'create', component : CreateemployeeComponent },
	     { path : 'edit/:num', component : CreateemployeeComponent },

  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports : [RouterModule]
})
export class EmployeeRoutingModule { }
