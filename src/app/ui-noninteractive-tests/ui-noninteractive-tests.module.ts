import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CardUtComponent } from './card-ut/card-ut.component';
import { ListUtComponent } from './list-ut/list-ut.component';
import { BottomsheetUtComponent } from './bottomsheet-ut/bottomsheet-ut.component';
import { DialogUtComponent } from './dialog-ut/dialog-ut.component';
import { SnackbarUtComponent } from './snackbar-ut/snackbar-ut.component';
import { TooltipUtComponent } from './tooltip-ut/tooltip-ut.component';
import { DatatableUtComponent } from './datatable-ut/datatable-ut.component';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';
import { UINoninteractiveTestsRoutingModule } from './ui-noninteractive-test-route.module';

@NgModule({
  declarations: [
    CardUtComponent,
    ListUtComponent,
    BottomsheetUtComponent,
    DialogUtComponent,
    SnackbarUtComponent,
    TooltipUtComponent,
    DatatableUtComponent,
    GeneralLayoutComponent
  ],
  imports: [CommonModule, UINoninteractiveTestsRoutingModule, MatButtonModule, MatTooltipModule]
})
export class UiNoninteractiveTestsModule {}
