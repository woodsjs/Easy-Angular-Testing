import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackbarUtComponent } from './snackbar-ut.component';

describe('ui-noninteractive - SnackbarUtComponent', () => {
  let component: SnackbarUtComponent;
  let fixture: ComponentFixture<SnackbarUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackbarUtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
