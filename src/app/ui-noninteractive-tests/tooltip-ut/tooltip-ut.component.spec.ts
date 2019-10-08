import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TooltipUtComponent } from './tooltip-ut.component';

describe('ui-noninteractive - TooltipUtComponent', () => {
  let component: TooltipUtComponent;
  let fixture: ComponentFixture<TooltipUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TooltipUtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
