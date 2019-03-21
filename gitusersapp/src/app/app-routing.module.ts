import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DisplayuserComponent } from './displayuser/displayuser.component';

const routes: Routes = [
	{ path : 'users', component : UsersComponent,
	  children : [
		{ path : 'displayuser/:id', component : DisplayuserComponent }
	  ]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
