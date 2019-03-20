import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NorouteComponent } from './noroute/noroute.component';
import { View11Component } from './view11/view11.component';

const routes: Routes = [
	{ path : 'view2', component : View2Component },

	{
		path : 'view1',
		component : View1Component,
		children : [
			{ path : '', redirectTo : 'view1', pathMatch : 'full' },
			{ path : 'view11', component : View11Component },
			{ path : '**', redirectTo : 'view1', pathMatch : 'full' }
		]
	},
	{ path : '', redirectTo : '/view1', pathMatch : 'full' },
	{ path : '**', component : NorouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
