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
        expect(stateOptions).toContain(
          option.getAttribute('ng-reflect-value')
        );
      }
    });
  });

  it('should properly populate the city list when our state is chosen', () => {
    expect(component).toBeTruthy();
  });

  it('should activate submit button if required fields are filled', () => {
    const nElement = fixture.debugElement.nativeElement;

    // let's get our input with the autocomplete

    // and click in it

    // and get our cdk container for the mat-autocomplete

    // and type the state name

    // now get the cities related to that state

    // and enter one in the City box

    // now check that our submit button is good
    expect(component).toBeTruthy();
  });

  it('should ', () => {
    expect(component).toBeTruthy();
  });
});
