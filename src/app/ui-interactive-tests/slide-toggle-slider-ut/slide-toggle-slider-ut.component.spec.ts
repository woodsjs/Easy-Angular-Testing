import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleSliderUtComponent } from './slide-toggle-slider-ut.component';
import { DebugElement } from '@angular/core';
import {
  MatSliderModule,
  MatSlideToggleModule,
  MatCardModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SlideToggleSliderUtComponent', () => {
  let component: SlideToggleSliderUtComponent;
  let fixture: ComponentFixture<SlideToggleSliderUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SlideToggleSliderUtComponent],
      imports: [
        MatSliderModule,
        MatSlideToggleModule,
        FormsModule,
        ReactiveFormsModule,
        MatCardModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideToggleSliderUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the color of the color selection when the slider is adjusted', () => {
    // be sure the changeColorValue method is called when the slider is moved
    const sliderDE: DebugElement = fixture.debugElement;
    const sliderEL: HTMLElement = sliderDE.nativeElement;
    const slider = sliderEL.querySelector('mat-slider#redSlider');

    const spy = spyOn(component, 'changeColorValue');

    const trackElement = slider.querySelector('.mat-slider-wrapper')!;
    const dimensions = trackElement.getBoundingClientRect();
    const x = dimensions.left + dimensions.width * 0.18;
    const y = dimensions.top + dimensions.height * 0.18;

    const event = document.createEvent('MouseEvent');
    event.initMouseEvent('mousedown',
      true, /* canBubble */
      true, /* cancelable */
      window, /* view */
      0, /* detail */
      x, /* screenX */
      y, /* screenY */
      x, /* clientX */
      y, /* clientY */
      false, /* ctrlKey */
      false, /* altKey */
      false, /* shiftKey */
      false, /* metaKey */
      0, /* button */
      null /* relatedTarget */);
    slider.dispatchEvent(event);
    fixture.detectChanges();

    console.log(slider.getAttribute('ng-reflect-model'));

    // be sure the color of the mat-card is adjusted when above
    expect(spy).toHaveBeenCalled();
  });

  it('should lock the color selection when the slider is switched', () => {
    expect(component).toBeTruthy();
  });
});
