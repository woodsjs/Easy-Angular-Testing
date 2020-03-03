import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick
} from '@angular/core/testing';

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

  it('should change the color of the color selection when the slider is adjusted', async () => {
    // be sure the changeColorValue method is called when the slider is moved
    const sliderDE: DebugElement = fixture.debugElement;
    const sliderEL: HTMLElement = sliderDE.nativeElement;
    const slider = sliderEL.querySelector('mat-slider#redSlider');

    const trackElement = await slider.querySelector('.mat-slider-wrapper')!;
    const dimensions = trackElement.getBoundingClientRect();
    const percentage = 0.2;

    const x = dimensions.left + dimensions.left * percentage;
    const y = dimensions.top + dimensions.top * percentage;
    const relativeX = Math.round(dimensions.width * percentage);
    const relativeY = Math.round(dimensions.height * 0.5);

    const event = document.createEvent('MouseEvent');
    event.initMouseEvent(
      'mousedown',
      true /* canBubble */,
      true /* cancelable */,
      window /* view */,
      0 /* detail */,
      x /* screenX */,
      y /* screenY */,
      relativeX /* clientX */,
      relativeY /* clientY */,
      false /* ctrlKey */,
      false /* altKey */,
      false /* shiftKey */,
      false /* metaKey */,
      0 /* button */,
      null /* relatedTarget */
    );

    // for the next set of tests
    // const spy = spyOn(component, 'changeColorValue').and.callThrough();

    await slider.dispatchEvent(event);
    fixture.detectChanges();

    // console.log('after slider ', slider.getAttribute('ng-reflect-model'));
    // console.log(
    //   document.getElementById('colorSelection').style.backgroundColor
    // );
    // console.log(
    //   window.getComputedStyle(document.querySelector('#colorSelection'))
    //     .backgroundColor
    // );

    // be sure the color of the mat-card is adjusted when above
    // expect(spy).toHaveBeenCalled();
    const expectedColor =
      'rgb(' + slider.getAttribute('ng-reflect-model') + ', 125, 125)';
    // console.log('expected color is ', expectedColor);

    const newColor = document.getElementById('colorSelection').style
      .backgroundColor;
    // console.log('new color is ', newColor);

    // for the next set of tests
    // expect(spy).toHaveBeenCalled();
    expect(newColor).toBe(expectedColor);
  });

  it('should lock the color selection when the slider is switched', () => {
    expect(component).toBeTruthy();
  });
});
