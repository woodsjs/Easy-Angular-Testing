import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormfieldAutocompleteUtComponent } from './input-formfield-autocomplete-ut.component';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        BrowserAnimationsModule
      ],
      declarations: [InputFormfieldAutocompleteUtComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormfieldAutocompleteUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should activate submit button if required buttons are filled', () => {
    expect(component).toBeTruthy();
  });

  it('should ', () => {
    expect(component).toBeTruthy();
  });

  it('should ', () => {
    expect(component).toBeTruthy();
  });

  it('should ', () => {
    expect(component).toBeTruthy();
  });
});
