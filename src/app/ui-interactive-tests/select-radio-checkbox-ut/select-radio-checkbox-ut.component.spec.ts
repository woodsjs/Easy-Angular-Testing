import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync
} from '@angular/core/testing';

import { SelectRadioCheckboxUtComponent } from './select-radio-checkbox-ut.component';
import {
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('SelectRadioCheckboxUtComponent', () => {
  let component: SelectRadioCheckboxUtComponent;
  let fixture: ComponentFixture<SelectRadioCheckboxUtComponent>;

  const sandwichList = [
    'veggie',
    'beef',
    'grilledChicken',
    'grilledFish',
    'chickenSalad',
    'tunaSalad'
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectRadioCheckboxUtComponent],
      imports: [
        MatRadioModule,
        MatCheckboxModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRadioCheckboxUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // This is considered a listbox. Did you know?
  // mat-select (id=mat-select-0) -> mat-select-trigger -> mat-select-trigger -> mat-select-value
  // mat-select-value-text
  // cdk-overlay-container -> div.cdk-overlay-0 ->
  // div.mat-select-panel-wrap -> mat-select-panel -> mat-option(value has the text)
  it('should populate our sandwich select from a list in code', async () => {
    const trigger = fixture.debugElement.query(By.css('.mat-select-trigger'))
      .nativeElement;

    trigger.click();
    fixture.detectChanges();

    await fixture.whenStable().then(() => {
      const inquiryOptions = fixture.debugElement.query(
        By.css('.mat-select-panel')
      ).nativeElement;

      for (const option of inquiryOptions.children) {
        // TODO: let's move our bigger list here, and use map reduce to get the data we need for this test
        expect(sandwichList).toContain(option.getAttribute('ng-reflect-value'));
      }
    });
  });

  // mat-checkbox -> label -> div -> input
  it('should display the appropriate extra options for sandwich type', () => {
    // TODO: Move bigger sandwichList here and use map reduce to get the data we need (meat vs nonmeat and name)
    // loop through the options, click on each, and verify that the correct options show up
    expect(component).toBeTruthy();
  });

  // mat-radio-group -> mat-radio-button
  it('should populate our sides from a list in code', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the proper data when order is clicked', () => {
    expect(component).toBeTruthy();
  });
});

// dispatchKeyboardEvent(select, 'keydown', DOWN_ARROW);

// expect(options[0].selected).toBe(true, 'Expected first option to be selected.');
// expect(formControl.value).toBe(
//   options[0].value,
//   'Expected value from first option to have been set on the model.'
// );

// dispatchKeyboardEvent(select, 'keydown', DOWN_ARROW);
// dispatchKeyboardEvent(select, 'keydown', DOWN_ARROW);

// // Note that the third option is skipped, because it is disabled.
// expect(options[3].selected).toBe(
//   true,
//   'Expected fourth option to be selected.'
// );
// expect(formControl.value).toBe(
//   options[3].value,
//   'Expected value from fourth option to have been set on the model.'
// );

// dispatchKeyboardEvent(select, 'keydown', UP_ARROW);

// expect(options[1].selected).toBe(
//   true,
//   'Expected second option to be selected.'
// );
// expect(formControl.value).toBe(
//   options[1].value,
//   'Expected value from second option to have been set on the model.'
// );

// here's a click
//  fixture.componentInstance.select.open();
//  fixture.detectChanges();
//  flush();

//  (overlayContainerElement.querySelectorAll(
//    'mat-option'
//  )[3] as HTMLElement).click();
//  fixture.detectChanges();
//  flush();

//  expect(formControl.value).toBe(options[3].value);

//  dispatchKeyboardEvent(select, 'keydown', DOWN_ARROW);
//  fixture.detectChanges();

//  expect(formControl.value).toBe(options[4].value);

// https://github.com/angular/components/blob/master/src/material/select/select.spec.ts
