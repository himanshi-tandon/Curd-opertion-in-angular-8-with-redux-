import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/modals/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { Store, State, select } from "@ngrx/store";
import * as employeeActions from "src/app/stores/states/employee.action";
import * as fromEmployee from "src/app/stores/states/employeee.reducer";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee = new Employee();
  submitted= false;
  constructor( private employeeService: EmployeeService,
    private router: Router,  private store: Store<fromEmployee.AppState>) { }

  ngOnInit(): void {
  }
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }
 

  save() {
    
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
    
  
  }
  onSubmit() {
    
    this.submitted = true;

     this.save();  
     this.store.dispatch(new employeeActions.CreateEmployee(this.employee));
   
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }

 
}
