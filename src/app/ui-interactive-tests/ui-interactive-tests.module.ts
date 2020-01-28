import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatChipsModule} from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

import { UIInteractiveTestsRoutingModule } from './ui-interactive-test-route.module';

import { ButtonToggleUtComponent } from './button-toggle-ut/button-toggle-ut.component';
import { TabExpansionPanelUtComponent } from './tab-expansion-panel-ut/tab-expansion-panel-ut.component';

@NgModule({
  declarations: [ ButtonToggleUtComponent, TabExpansionPanelUtComponent ],
  imports: [
    CommonModule,
    UIInteractiveTestsRoutingModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatExpansionModule
  ]
})
export class UiInteractiveTestsModule { }
