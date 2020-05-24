import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Store } from '@ngrx/store';

import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateEmployeeComponent } from './components/employees/create-employee/create-employee.component';
import { EmployeeListComponent } from './components/employees/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employees/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './components/employees/update-employee/update-employee.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffect } from 'src/app/stores/employee.effect';
import { employeeReducer } from "src/app/stores/states/employeee.reducer";
@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ employee: employeeReducer }),
    EffectsModule.forRoot([CustomerEffect]),
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
