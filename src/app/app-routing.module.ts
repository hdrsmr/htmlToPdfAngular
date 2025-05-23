import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataViewComponent } from './data-view/data-view.component';

const routes: Routes = [
  { path: '', component: DataViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
