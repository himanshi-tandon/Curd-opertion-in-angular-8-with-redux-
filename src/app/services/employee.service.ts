import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../modals/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseurl = "http://localhost:3000/Employees"

  constructor( private http:HttpClient) { }
 

  getEmployee(payload: number): Observable<any> {
    return this.http.get(`${this.baseurl}/${payload}`);
  }
 
  createEmployee(payload: Employee): Observable<Object> {
    return this.http.post(`${this.baseurl}`, payload);
  }
 
  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseurl}/${id}`, value);
  }
  // updateEmployee(employee: Employee): Observable<Object> {
  //   console.log(employee);
  
  //   return this.http.put(`${this.baseurl}/${employee.id}`,employee);
  // }

  deleteEmployee(payload: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${payload}`, { responseType: 'text' });
  }
  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseurl}`);
  }
}