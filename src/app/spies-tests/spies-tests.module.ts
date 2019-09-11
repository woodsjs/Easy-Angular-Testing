import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimarySpiesComponent } from './primary/primary.component';
import { SecondarySpiesComponent } from './secondary/secondary.component';

@NgModule({
  declarations: [PrimarySpiesComponent, SecondarySpiesComponent],
  imports: [
    CommonModule
  ]
})
export class SpiesTestsModule { }
