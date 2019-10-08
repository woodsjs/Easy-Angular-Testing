import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomsheetUtComponent } from './bottomsheet-ut.component';

describe('ui-noninteractive - BottomsheetUtComponent', () => {
  let component: BottomsheetUtComponent;
  let fixture: ComponentFixture<BottomsheetUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomsheetUtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomsheetUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
