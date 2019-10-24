import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TooltipUtComponent } from './tooltip-ut/tooltip-ut.component';
import { SnackbarUtComponent } from './snackbar-ut/snackbar-ut.component';
import { ListUtComponent } from './list-ut/list-ut.component';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';
import { DialogUtComponent } from './dialog-ut/dialog-ut.component';
import { DatatableUtComponent } from './datatable-ut/datatable-ut.component';
import { CardUtComponent } from './card-ut/card-ut.component';
import { BottomsheetUtComponent } from './bottomsheet-ut/bottomsheet-ut.component';

const childRoutes: Routes = [
  { path: '', component: TooltipUtComponent, pathMatch: 'full' },
  { path: 'tooltipTest', component: TooltipUtComponent },
  { path: 'snackbarTest', component: SnackbarUtComponent },
  { path: 'listTest', component: ListUtComponent },
  { path: 'generalLayoutTest', component: GeneralLayoutComponent },
  { path: 'dialogTest', component: DialogUtComponent },
  { path: 'datatableTest', component: DatatableUtComponent },
  { path: 'cardTest', component: CardUtComponent },
  { path: 'bottomsheetTest', component: BottomsheetUtComponent },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class UINoninteractiveTestsRoutingModule {}
