import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FunctionalityComponent } from './functionality/functionality.component';
import { TobestubbedComponent } from './tobestubbed/tobestubbed.component';

const childRoutes: Routes = [
  { path: '', component: FunctionalityComponent },
  { path: 'thestub', component: TobestubbedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class ComponentStubRoutingModule {}
