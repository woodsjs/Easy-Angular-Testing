import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonToggleChipUtComponent } from './button-toggle-chip-ut/button-toggle-chip-ut.component';

const childRoutes: Routes = [
  { path: 'buttonToggleTest', component: ButtonToggleChipUtComponent }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class UIInteractiveTestsRoutingModule {}
