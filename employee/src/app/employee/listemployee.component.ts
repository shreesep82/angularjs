import { Component, OnInit } from '@angular/core';
import {EmployeeService} from './employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})
export class ListemployeeComponent implements OnInit {

  employee_details : json = [];

  constructor(public emp_srv : EmployeeService, private router : Router) {
    //console.log('details: ', this.emp_srv.getEmployeeDetails());

  }

  ngOnInit() {
    //let emp_srv = new EmployeeService()
    /*
    console.log(this.emp_srv.getEmployeeDetails());
    for(const employee of this.emp_srv.getEmployeeDetails()) {
      console.log('employee : ', employee);
      this.employee_details[0] = employee;
    }
    */
    this.getEmployeeDetailsJson();
    //console.log('employee_details : ', emp_details);
  }

  edit(emp_id : number) : void {
    console.log('before navigating to /edit');
    this.router.navigate(['/employee/edit', emp_id])
  }

  getEmployeeDetails() : json {
    return this.getEmployeeDetailsJson();
    //return [];
  }

  async getEmployeeDetailsJson() : any {

    this.employee_details = await this.emp_srv.getEmployeeDetailsJson();

  }

}
