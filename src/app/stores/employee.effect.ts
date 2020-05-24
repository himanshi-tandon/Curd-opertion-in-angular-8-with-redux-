import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import { EmployeeService } from "src/app/services/employee.service";
import * as employeeActions from "src/app/stores/states/employee.action";
import { Employee } from "src/app/modals/employee";


@Injectable()

export class CustomerEffect {

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService
  ) {}

  @Effect()
  LoadEmployees$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.LoadEmployees>(
        employeeActions.employeeActionTypes.LOAD_EMPLOYEES
    ),
    mergeMap((action: employeeActions.LoadEmployees) =>
      this.employeeService.getEmployeesList().pipe(
        map(
          (employee: Employee[]) =>
            new employeeActions.LoadEmployeesSuccess(employee)
        ),
        catchError(err => of(new employeeActions.LoadEmployeesFail(err)))
      )
    )
  );

  @Effect()
  loadEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.LoadEmployee>(
        employeeActions.employeeActionTypes.LOAD_EMPLOYEE
    ),
    mergeMap((action: employeeActions.LoadEmployee) =>
      this.employeeService.getEmployee(action.payload).pipe(
        map(
          (employee: Employee) =>
            new employeeActions.LoadEmployeeSuccess(employee)
        ),
        catchError(err => of(new employeeActions.LoadEmployeeFail(err)))
      )
    )
  );

  @Effect()
  createEmployee$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.CreateEmployee>(
        employeeActions.employeeActionTypes.CREATE_EMPLOYEE
    ),
    map((action: employeeActions.CreateEmployee) => action.payload),
    mergeMap((employee: Employee) =>
      this.employeeService.createEmployee(employee).pipe(
        map(
          (newEmployee: Employee) =>
            new employeeActions.CreateEmployeeSuccess(newEmployee)
        ),
        catchError(err => of(new employeeActions.CreateEmployeeFail(err)))
      )
    )
  );

  // @Effect()
  // updateEmployee$: Observable<Action> = this.actions$.pipe(
  //   ofType<employeeActions.UpdateEmployee>(
  //       employeeActions.employeeActionTypes.UPDATE_EMPLOYEE
  //   ),
  //   map((action: employeeActions.UpdateEmployee) => action.payload),
  //   mergeMap((employee: Employee) =>
  //     this.employeeService.updateEmployee(employee).pipe(
  //       map(
  //         (updateEmployee: Employee) =>
  //           new employeeActions.UpdateEmployeeSuccess({
  //             id: updateEmployee.id,
  //             changes: updateEmployee
  //           })
  //       ),
  //       catchError(err => of(new employeeActions.UpdateEmployeeFail(err)))
  //     )
  //   )
  // );

  @Effect()
  deleteCustomer$: Observable<Action> = this.actions$.pipe(
    ofType<employeeActions.DeleteEmployee>(
        employeeActions.employeeActionTypes.DELETE_EMPLOYEE
    ),
    map((action: employeeActions.DeleteEmployee) => action.payload),
    mergeMap((id: number) =>
      this.employeeService.deleteEmployee(id).pipe(
        map(() => new employeeActions.DeleteEmployeeSuccess(id)),
        catchError(err => of(new employeeActions.DeleteEmployeeFail(err)))
      )
    )
  );
}