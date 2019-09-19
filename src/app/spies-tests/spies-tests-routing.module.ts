import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrimarySpiesComponent } from './primary/primary.component';

const childRoutes: Routes = [
  { path: '', component: PrimarySpiesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class SpiesTestsRoutingModule {}
