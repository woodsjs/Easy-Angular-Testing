import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectRadioCheckboxUtComponent } from './select-radio-checkbox-ut.component';
import { MatRadioModule, MatCheckboxModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SelectRadioCheckboxUtComponent', () => {
  let component: SelectRadioCheckboxUtComponent;
  let fixture: ComponentFixture<SelectRadioCheckboxUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectRadioCheckboxUtComponent ],
      imports: [MatRadioModule, MatCheckboxModule, MatSelectModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRadioCheckboxUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
