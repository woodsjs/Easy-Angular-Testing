import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonToggleChipUtComponent } from './button-toggle-chip-ut.component';

describe('ButtonToggleChipUtComponent', () => {
  let component: ButtonToggleChipUtComponent;
  let fixture: ComponentFixture<ButtonToggleChipUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonToggleChipUtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToggleChipUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
