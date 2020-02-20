import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonToggleUtComponent } from './button-toggle-ut/button-toggle-ut.component';
import { TabExpansionPanelUtComponent } from './tab-expansion-panel-ut/tab-expansion-panel-ut.component';
import { StepperComponent } from './stepper/stepper.component';

const childRoutes: Routes = [
  { path: 'buttonToggleTest', component: ButtonToggleUtComponent },
  { path: 'tabexpansionpaneltest', component: TabExpansionPanelUtComponent },
  { path: 'steppertest', component: StepperComponent }
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class UIInteractiveTestsRoutingModule {}
