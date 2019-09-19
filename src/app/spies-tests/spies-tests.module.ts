import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimarySpiesComponent } from './primary/primary.component';
import { SecondarySpiesComponent } from './secondary/secondary.component';
import { SpiesTestsRoutingModule } from './spies-tests-routing.module';

@NgModule({
  declarations: [PrimarySpiesComponent, SecondarySpiesComponent],
  imports: [
    CommonModule, SpiesTestsRoutingModule
  ]
})
export class SpiesTestsModule { }
