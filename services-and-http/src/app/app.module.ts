import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent
  ],
  imports: [
    BrowserModule,
    // we dont need to add to the prodivers (this angular injector do that for us)
    HttpClientModule
  ],
  // WE injet the servcie in the top level , using anlgular injector
  providers: [EmployeeService],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
