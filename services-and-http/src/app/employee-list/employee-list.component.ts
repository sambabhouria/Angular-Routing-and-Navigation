import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Lit of employees</h2>
    <h3>{{errorMsg |  json}}</h3>
    <ul *ngFor= " let employee of employees">
     <li>{{employee.name}}</li>
    </ul>

  `,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  // public employees = [
  //   {id: 1, name:"George", age:32, retiredate:"March 12, 2014"},
  //   {id: 2, name:"Edward", age:17, retiredate:"June 2, 2023"},
  //   {id: 3, name:"Christine", age:58, retiredate:"December 20, 2036"},
  //   {id: 4, name:"Sarah", age:62, retiredate:"April 30, 2020"}
  // ]

  public employees = [ ];
  public errorMsg;
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    // this.employees = this._employeeService.getEmployees();
    // this method return an observable to use it we need to subscribe to it
    // the data arrive assynchronous and the data is assyned to the employee variables
    this._employeeService.getEmployees()
    .subscribe(data => this.employees= data,
      error => this.errorMsg = error.message
    );

  }
}
