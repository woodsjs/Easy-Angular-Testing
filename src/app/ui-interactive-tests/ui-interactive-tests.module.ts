import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
// stepper
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatRadioModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatDividerModule
} from '@angular/material';
import { MatCardModule } from '@angular/material/card';

import { UIInteractiveTestsRoutingModule } from './ui-interactive-test-route.module';

import { ButtonToggleUtComponent } from './button-toggle-ut/button-toggle-ut.component';
import { TabExpansionPanelUtComponent } from './tab-expansion-panel-ut/tab-expansion-panel-ut.component';
import { StepperComponent } from './stepper/stepper.component';
import { SlideToggleSliderUtComponent } from './slide-toggle-slider-ut/slide-toggle-slider-ut.component';
import { SelectRadioCheckboxUtComponent } from './select-radio-checkbox-ut/select-radio-checkbox-ut.component';
import { InputFormfieldAutocompleteUtComponent } from './input-formfield-autocomplete-ut/input-formfield-autocomplete-ut.component';
import { DatepickerNavcontainersUtComponent } from './datepicker-navcontainers-ut/datepicker-navcontainers-ut.component';

@NgModule({
  declarations: [
    ButtonToggleUtComponent,
    TabExpansionPanelUtComponent,
    StepperComponent,
    SlideToggleSliderUtComponent,
    SelectRadioCheckboxUtComponent,
    InputFormfieldAutocompleteUtComponent,
    DatepickerNavcontainersUtComponent
  ],
  imports: [
    CommonModule,
    UIInteractiveTestsRoutingModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatExpansionModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule
  ]
})
export class UiInteractiveTestsModule {}
