import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonToggleUtComponent } from './button-toggle-ut/button-toggle-ut.component';

const childRoutes: Routes = [
  { path: 'buttonToggleTest', component: ButtonToggleUtComponent }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class UIInteractiveTestsRoutingModule {}
