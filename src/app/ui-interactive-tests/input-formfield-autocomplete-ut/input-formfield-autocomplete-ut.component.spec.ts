import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormfieldAutocompleteUtComponent } from './input-formfield-autocomplete-ut.component';
import { MatInputModule, MatFormFieldModule, MatAutocompleteModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

describe('InputFormfieldAutocompleteUtComponent', () => {
  let component: InputFormfieldAutocompleteUtComponent;
  let fixture: ComponentFixture<InputFormfieldAutocompleteUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        MatAutocompleteModule,
        CommonModule
      ],
      declarations: [InputFormfieldAutocompleteUtComponent]
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

  it('should activate submit button if required fields are filled', () => {
    expect(component).toBeTruthy();
  });

  it('should poplate the state input with the proper autocomplete options', () => {
    expect(component).toBeTruthy();
  });

  it('should properly populate the city list when our state is chosen', () => {
    expect(component).toBeTruthy();
  });

  it('should ', () => {
    expect(component).toBeTruthy();
  });
});
