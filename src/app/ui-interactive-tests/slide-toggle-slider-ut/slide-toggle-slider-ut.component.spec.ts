import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleSliderUtComponent } from './slide-toggle-slider-ut.component';

describe('SlideToggleSliderUtComponent', () => {
  let component: SlideToggleSliderUtComponent;
  let fixture: ComponentFixture<SlideToggleSliderUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlideToggleSliderUtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideToggleSliderUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
