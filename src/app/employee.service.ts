import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable()
export class EmployeeService {
  API_URL: string =
    'https://employee-management-restapi.herokuapp.com/employee';
  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.API_URL);
  }

  public addEmployees(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.API_URL + '/add', employee);
  }

  public getEmployee(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(this.API_URL + '/${employeeId}');
  }
  public deleteEmployee(employeeId: number): void {
    this.http.delete<Employee>(this.API_URL + '/delete' + '/${employeeId}');
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.API_URL + '/update', employee);
  }
}
