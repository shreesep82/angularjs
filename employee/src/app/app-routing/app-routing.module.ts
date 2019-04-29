import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { CreateemployeeComponent } from '../employee/createemployee.component';
import { ListemployeeComponent } from '../employee/listemployee.component';
import { HomeComponent } from '../home.component';
import { PagenotfoundComponent } from '../pagenotfound.component';
import { CustomPreloadingService } from '../custom-preloading.service'

const routes: Routes = [
	{ path : 'employee', data : { preload : false }, loadChildren : '../employee/employee.module#EmployeeModule' },
	{ path : 'home', component : HomeComponent },
	{ path : '', redirectTo : '/home', pathMatch : 'full' },
	{ path : '**', component : PagenotfoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {preloadingStrategy : CustomPreloadingService})
  ],
  declarations: [],
  exports : [RouterModule]
})
export class AppRoutingModule { }
