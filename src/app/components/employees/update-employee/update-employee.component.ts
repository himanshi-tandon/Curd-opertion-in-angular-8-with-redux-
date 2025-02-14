import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/modals/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Store, State, select } from "@ngrx/store";
import * as employeeActions from "src/app/stores/states/employee.action";
import * as fromEmployee from "src/app/stores/states/employeee.reducer";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id: number;
  employee: Employee;
  submitted= false;
  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService,  private store: Store<fromEmployee.AppState>) { }

  ngOnInit() {
    // const customer$: Observable<Employee> = this.store.select(
    //   fromEmployee.getCurrentEmployee)
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];



    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error => console.log(error));

  }
  


  updateEmployee() {
    const customer$: Observable<Employee> = this.store.select(
      fromEmployee.getCurrentEmployee)
    // this.employeeService.updateEmployee(this.employee,this.id)
    customer$
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
     
  }

  onSubmit() {
   
    this.updateEmployee();   
    this.store.dispatch(new employeeActions.UpdateEmployee(this.employee)); 
   
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}