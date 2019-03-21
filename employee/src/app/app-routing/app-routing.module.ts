import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateemployeeComponent } from '../employee/createemployee.component';
import { ListemployeeComponent } from '../employee/listemployee.component';

const routes: Routes = [
	{ path : 'list', component : ListemployeeComponent },
	{ path : 'create', component : CreateemployeeComponent },
	{ path : '', redirectTo : '/list', pathMatch : 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports : [RouterModule]
})
export class AppRoutingModule { }
