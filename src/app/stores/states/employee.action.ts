import {Action} from '@ngrx/store'
import { Update } from '@ngrx/entity';
import {Employee} from 'src/app/modals/employee'


export enum employeeActionTypes {
LOAD_EMPLOYEES=  "[Employee] Load employee",
LOAD_EMPLOYEES_SUCCESS = "[Employee] Load Customers Success",
LOAD_EMPLOYEES_FAIL = "[Employee] Load Customers Fail",
LOAD_EMPLOYEE = "[Employee] Load Customer",
LOAD_EMPLOYEE_SUCCESS = "[Employee] Load Customer Success",
LOAD_EMPLOYEE_FAIL = "[Employee] Load Customer Fail",
CREATE_EMPLOYEE = "[Employee] Create Customer",
CREATE_EMPLOYEE_SUCCESS = "[Employee] Create Customer Success",
CREATE_EMPLOYEE_FAIL = "[Employee] Create Customer Fail",
UPDATE_EMPLOYEE = "[Employee] Update Customer",
UPDATE_EMPLOYEE_SUCCESS = "[Employee] Update Customer Success",
UPDATE_EMPLOYEE_FAIL = "[Employee] Update Customer Fail",
DELETE_EMPLOYEE = "[Employee] Delete Customer",
DELETE_EMPLOYEE_SUCCESS = "[Employee] Delete Customer Success",
DELETE_EMPLOYEE_FAIL = "[Employee] Delete Customer Fail"
}

export class LoadEmployees implements Action{
    readonly type = employeeActionTypes.LOAD_EMPLOYEES;
}

export class LoadEmployeesSuccess implements Action{
    readonly type= employeeActionTypes.LOAD_EMPLOYEES_SUCCESS;
    constructor(public payload: Employee[]) {}
}

export class LoadEmployeesFail implements Action{
    readonly type= employeeActionTypes.LOAD_EMPLOYEES_FAIL;
    
  constructor(public payload: string) {}
}

export class LoadEmployee implements Action{
    readonly type= employeeActionTypes.LOAD_EMPLOYEE;
    constructor(public payload: number) {}
}
export class LoadEmployeeSuccess implements Action{
    readonly type= employeeActionTypes.LOAD_EMPLOYEE_SUCCESS;
    constructor(public payload: Employee) {}
}
export class LoadEmployeeFail implements Action{
    readonly type= employeeActionTypes.LOAD_EMPLOYEE_FAIL;
    constructor(public payload: string) {}
}
export class CreateEmployee implements Action{
    readonly type= employeeActionTypes.CREATE_EMPLOYEE;
    constructor(public payload: Employee) {}
}

export class CreateEmployeeSuccess implements Action{
    readonly type= employeeActionTypes.CREATE_EMPLOYEE_SUCCESS;
    constructor(public payload: Employee) {}
}

export class CreateEmployeeFail implements Action{
    readonly type= employeeActionTypes.CREATE_EMPLOYEE_FAIL;
    constructor(public payload: string) {}
}

export class UpdateEmployee implements Action{
    readonly type= employeeActionTypes.UPDATE_EMPLOYEE;
    constructor(public payload: Employee) {}
}

export class UpdateEmployeeSuccess implements Action{
    readonly type= employeeActionTypes.UPDATE_EMPLOYEE_SUCCESS;

    constructor(public payload: Update<Employee>) {}
}


export class UpdateEmployeeFail implements Action{
    readonly type= employeeActionTypes.UPDATE_EMPLOYEE_FAIL;
    constructor(public payload: string) {}
}

export class DeleteEmployee implements Action{
    readonly type= employeeActionTypes.DELETE_EMPLOYEE;
    constructor(public payload: number) {}
}

export class DeleteEmployeeSuccess implements Action{
    readonly type= employeeActionTypes.DELETE_EMPLOYEE_SUCCESS;
    constructor(public payload: number) {}
}

export class DeleteEmployeeFail implements Action{
    readonly type= employeeActionTypes.DELETE_EMPLOYEE_FAIL;
    constructor(public payload: string) {}
}


export type Actions =
  | LoadEmployees
  |LoadEmployeesSuccess
  |LoadEmployeesFail
  |LoadEmployee
  |LoadEmployeeSuccess
  |LoadEmployeeFail
  |CreateEmployee
  |CreateEmployeeSuccess
  |CreateEmployeeFail
  |UpdateEmployee
  |UpdateEmployeeSuccess
  |UpdateEmployeeFail
  |DeleteEmployee
  |DeleteEmployeeSuccess
  |DeleteEmployeeFail

