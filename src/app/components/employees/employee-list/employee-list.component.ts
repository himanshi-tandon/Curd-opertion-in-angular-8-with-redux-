import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/modals/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { Router } from '@angular/router';
import { Store, State, select } from "@ngrx/store";
import * as employeeActions from "src/app/stores/states/employee.action";
import * as fromEmployee from "src/app/stores/states/employeee.reducer";
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

error$: Observable<String>;
employees$:Observable<Employee[]>;
  constructor(private employeeService: EmployeeService , private router:Router,private store: Store<fromEmployee.AppState>) { }

  ngOnInit() {
    this.store.dispatch(new employeeActions.LoadEmployees());
    this.employees$ = this.store.pipe(select(fromEmployee.getEmployee));
    this.error$ = this.store.pipe(select(fromEmployee.getError));
    this.reloadData();
  }

  reloadData() {
    this.employees$ = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
   
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
          if (confirm("Are You Sure You want to Delete the User?")) {
            this.store.dispatch(new employeeActions.DeleteEmployee(id));
     }
    
  }
  
  employeeDetails(id: number){
    this.router.navigate(['details', id]);
  }
  UpdateEmployee(id: number){
    
    this.router.navigate(['update', id]);
    this.store.dispatch(new employeeActions.LoadEmployee(id));
  }
}