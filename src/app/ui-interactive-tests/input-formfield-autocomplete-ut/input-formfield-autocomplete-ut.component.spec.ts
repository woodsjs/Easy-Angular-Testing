import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormfieldAutocompleteUtComponent } from './input-formfield-autocomplete-ut.component';
import {
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';
import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';

describe('InputFormfieldAutocompleteUtComponent', () => {
  let component: InputFormfieldAutocompleteUtComponent;
  let fixture: ComponentFixture<InputFormfieldAutocompleteUtComponent>;

  const testState = {
    state: 'Illinois',
    city: ['Chicago', 'Aurora', 'Naperville', 'Joliet'],
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        CommonModule,
      ],
      declarations: [InputFormfieldAutocompleteUtComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormfieldAutocompleteUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // if you have custom validators, you would include the tests where those are defined, which
  // probably wouldn't be here, it would be in another module filled with validators

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // cdk-overlay-container -> cdk-overlay-N -> div.mat-autocomplete-panel -> mat-option -> span.mat-option-text
  // this is just like the mat-select
  it('should poplate the state input with the proper autocomplete options', async () => {
    const stateOptions = component.options.map((option) => option.state);

    const stateClicker = fixture.debugElement.query(
      By.css('mat-form-field#state input')
    ).nativeElement;

    stateClicker.click();
    fixture.detectChanges();

    await fixture.whenStable().then(() => {
      const autocompleteOptions = fixture.debugElement.query(
        By.css('.mat-autocomplete-panel')
      ).nativeElement;

      for (const option of autocompleteOptions.children) {
        expect(stateOptions).toContain(option.getAttribute('ng-reflect-value'));
      }
    });
  });

  it('should properly validate the city input when our state is chosen', async () => {
    // click our state form field
    const stateMatFormField = fixture.debugElement.query(
      By.css('mat-form-field#state input')
    ).nativeElement;

    stateMatFormField.click();
    fixture.detectChanges();

    await fixture.whenStable().then(() => {
      // select state from the list
      const stateAutoOption = fixture.debugElement.query(
        By.css(
          '.mat-autocomplete-panel mat-option[ng-reflect-value="' +
            testState.state +
            '"]'
        )
      ).nativeElement;

      // after this the option is not actually selected...
      stateAutoOption.click();
      fixture.detectChanges();

      // we need to do this, so the selection event fires
      stateMatFormField.click();
      fixture.detectChanges();

      // let's check that the wrong value triggers the invalid response
      component.addressForm.get('cityField').setValue('Houston');
      fixture.detectChanges();

      expect(component.addressForm.invalid).toBeTruthy();

      // now let's fill in the city with a correct value
      // setValue triggers all the goodness!
      component.addressForm.get('cityField').setValue('Chicago');
      fixture.detectChanges();

      // and we should expect things to pass
      expect(component.addressForm.invalid).toBeFalsy();
    });
  });

  it('should activate submit button if required fields are filled', () => {
    // let's get our input with the autocomplete
    component.addressForm.get('stateField').setValue(testState.state);
    component.addressForm.get('cityField').setValue(testState.city[0]);
    fixture.detectChanges();

    const theButton = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(theButton.disabled).toBeFalsy();
  });

  it('should not activate submit button if required fields are filled incorrectly', () => {
    // let's get our input with the autocomplete
    component.addressForm.get('stateField').setValue(testState.state);
    component.addressForm.get('cityField').setValue('Houston');
    fixture.detectChanges();

    const theButton = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(theButton.disabled).toBeTruthy();
  });


});
