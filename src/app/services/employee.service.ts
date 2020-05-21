import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseurl = "http://localhost:3000/Employees"

  constructor( private http:HttpClient) { }
 

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseurl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseurl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseurl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`, { responseType: 'text' });
  }
  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseurl}`);
  }
}