import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { EmployeeListComponent } from './service/employee-list/employee-list.component';

const routes: Routes = [{
  path: 'test',
  component: TestComponent
}, {
  path: 'employees',
  component: EmployeeListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
