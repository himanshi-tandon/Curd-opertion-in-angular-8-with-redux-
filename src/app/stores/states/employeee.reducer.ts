import * as employeeActions from "./employee.action";
import { Employee } from 'src/app/modals/employee';
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromRoot from "src/app/state/app-state";

export interface employeeState extends EntityState<Employee> {
  selectedEmployeeId: number | null;
    loading: boolean;
    loaded: boolean;
    error: string;
 
  }
  export interface AppState extends fromRoot.AppState {
    employees: employeeState;
  }

  
export const emloyeeAdapter: EntityAdapter<Employee> = createEntityAdapter<Employee>();


export const defaultEmployee: employeeState = {
    ids: [],
    entities: {},
    selectedEmployeeId: null,
    loading: false,
    loaded: false,
    error: ""
  
  };
  
  export const initialState = emloyeeAdapter.getInitialState(defaultEmployee);

  export function employeeReducer(
    state = initialState,
    action: employeeActions.Actions
  ): employeeState {
    switch (action.type) {
      case employeeActions.employeeActionTypes.LOAD_EMPLOYEES_SUCCESS: {
        return emloyeeAdapter.addAll(action.payload, {
          ...state,
          loading: false,
          loaded: true
        });
      }
      case employeeActions.employeeActionTypes.LOAD_EMPLOYEES_FAIL: {
        return {
          ...state,
          entities: {},
          loading: false,
          loaded: false,
          error: action.payload
        };
      }
      case employeeActions.employeeActionTypes.LOAD_EMPLOYEE_SUCCESS: {
        return emloyeeAdapter.addOne(action.payload, {
          ...state,
          selectedCustomerId: action.payload.id
        });
      }
      case employeeActions.employeeActionTypes.LOAD_EMPLOYEE_FAIL: {
        return {
          ...state,
          error: action.payload
        };
      }
  
      case employeeActions.employeeActionTypes.CREATE_EMPLOYEE_SUCCESS: {
        return emloyeeAdapter.addOne(action.payload, state);
      }
      case employeeActions.employeeActionTypes.CREATE_EMPLOYEE_FAIL: {
        return {
          ...state,
          error: action.payload
        };
      }

      case employeeActions.employeeActionTypes.UPDATE_EMPLOYEE_SUCCESS: {
        return emloyeeAdapter.updateOne(action.payload, state);
      }
      case employeeActions.employeeActionTypes.UPDATE_EMPLOYEE_FAIL: {
        return {
          ...state,
          error: action.payload
        };
      }
  
      case employeeActions.employeeActionTypes.DELETE_EMPLOYEE_SUCCESS: {
        return emloyeeAdapter.removeOne(action.payload, state);
      }
      case employeeActions.employeeActionTypes.DELETE_EMPLOYEE_FAIL: {
        return {
          ...state,
          error: action.payload
        };
      }
  
      default: {
        return state;
      }



    }
  }


  const getEmployeeFeatureState = createFeatureSelector<employeeState>(
    "Employees"
  );
  
  export const getEmployee = createSelector(
    getEmployeeFeatureState,
    emloyeeAdapter.getSelectors().selectAll
  );
  
  export const getEmployeesLoading = createSelector(
    getEmployeeFeatureState,
    (state: employeeState) => state.loading
  );
  
  export const getEmployeesLoaded = createSelector(
    getEmployeeFeatureState,
    (state: employeeState) => state.loaded
  );
  
  export const getError = createSelector(
    getEmployeeFeatureState,
    (state: employeeState) => state.error
  );
  
  export const getCurrentEmployeeId = createSelector(
    getEmployeeFeatureState,
    (state: employeeState) => state.selectedEmployeeId
  );
  export const getCurrentEmployee = createSelector(
    getEmployeeFeatureState,
    getCurrentEmployeeId,
    state => state.entities[state.selectedEmployeeId]
  );
  

