import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIInteractiveTestsRoutingModule } from './ui-interactive-test-route.module';

import { ButtonToggleChipUtComponent } from './button-toggle-chip-ut/button-toggle-chip-ut.component';

@NgModule({
  declarations: [ ButtonToggleChipUtComponent ],
  imports: [
    CommonModule,
    UIInteractiveTestsRoutingModule
  ]
})
export class UiInteractiveTestsModule { }
