import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkOrderFormComponent } from './work-order-form/work-order-form.component';
import { WorkOrderListComponent } from './work-order-list/work-order-list.component';

const routes: Routes = [
  {path: 'form', component: WorkOrderFormComponent},
  {path: 'history', component: WorkOrderListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
