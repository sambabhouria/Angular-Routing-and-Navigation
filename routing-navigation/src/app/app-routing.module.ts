import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo: '/departments', pathMatch:'full'},
  {path:'departments', component: DepartmentListComponent },
  {path:'employees', component: EmployeeListComponent },
  // this will always be last configuration in the array that because tru to match
  // router from the top
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  DepartmentListComponent,
  // DepartmentDetailComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  // DepartmentOverviewComponent,
  // DepartmentContactComponent
]
