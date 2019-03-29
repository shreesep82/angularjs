import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http : HttpClient ) {
  }

  ngOnInit() {
  }

  async getEmployeeDetails() : any {
    let data = await this.http.get('http://localhost:3000/employee').toPromise()
    console.log('employees : ', data);
    return data;
  }

  async getEmployeeDetailsById(emp_id : number) : any {
    let data = await this.http.get('http://localhost:3000/employee/' + emp_id).toPromise()
    console.log('employee : ', data);
    return data;
  }

  async getEmployeeDetailsJson() : any {
    let employees = await this.getEmployeeDetails();
    console.log('employees : ', employees);
    return employees;
  }

  async updateEmployeeDetails(emp : json) : any {
    const headers = new HttpHeaders().set("Content-Type", "application/json")
    let data = await this.http.put('http://localhost:3000/employee/' + emp.id, emp, {
      headers
    })
    .toPromise();

    console.log('data : ', data);
    return data;
  }

  async CreateEmployeeDetails(emp : json) : any {
    const headers = new HttpHeaders().set("Content-Type", "application/json")
    let data = await this.http.post('http://localhost:3000/employee', emp, {
      headers
    })
    .toPromise();

    console.log('data : ', data);
    return data;
  }

}
