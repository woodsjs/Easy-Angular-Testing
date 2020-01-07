import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatChipsModule} from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UIInteractiveTestsRoutingModule } from './ui-interactive-test-route.module';

import { ButtonToggleChipUtComponent } from './button-toggle-chip-ut/button-toggle-chip-ut.component';

@NgModule({
  declarations: [ ButtonToggleChipUtComponent ],
  imports: [
    CommonModule,
    UIInteractiveTestsRoutingModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UiInteractiveTestsModule { }
