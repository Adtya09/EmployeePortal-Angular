import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-dashbord',
  templateUrl: './employee-dashbord.component.html',
  styleUrls: ['./employee-dashbord.component.css'],
})
export class EmployeeDashbordComponent implements OnInit {
  employees: Employee[];
  
  constructor(private empService: EmployeeService) {}
  getAllEmployee() {
    this.empService.getEmployees().subscribe(
      (response) => {
        this.employees = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  ngOnInit() {
    this.getAllEmployee();
  }
}
