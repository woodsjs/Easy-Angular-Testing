import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideToggleSliderUtComponent } from './slide-toggle-slider-ut.component';
import { DebugElement } from '@angular/core';
import {
  MatSliderModule,
  MatSlideToggleModule,
  MatCardModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

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
    // get our slider under test
    const sliderDE: DebugElement = fixture.debugElement;
    const sliderEL: HTMLElement = sliderDE.nativeElement;
    const slider = sliderEL.querySelector('mat-slider#redSlider');

    // adjust percentage to adjust what the value is after we click
    const percentage = 0.25;
    // we're getting the child track, which is what actually slides
    const trackElement = slider.querySelector('.mat-slider-wrapper');
    // how big is it? where is it on the page?
    const dimensions = trackElement.getBoundingClientRect();

    // where is it on the page?
    const x = dimensions.left;
    const y = dimensions.top;
    // where the click lands within our element
    const relativeX = Math.round(dimensions.width * percentage);
    const relativeY = Math.round(dimensions.height * percentage);

    const event = document.createEvent('MouseEvent');

    // https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-eventgroupings-mouseevents
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

    slider.dispatchEvent(event);
    fixture.detectChanges();

    // be sure the color of the mat-card is adjusted when above
    // our ng-reflect attributes are built for testing like this,
    // so let's use them
    const expectedColor =
      'rgb(' + slider.getAttribute('ng-reflect-model') + ', 125, 125)';

    const newColor = document.getElementById('colorSelection').style
      .backgroundColor;

    expect(newColor).toBe(expectedColor);
  });

  it('should call our method that changes the color of the selection', () => {
    // be sure the changeColorValue method is called when the slider is moved
    const sliderDE: DebugElement = fixture.debugElement;
    const sliderEL: HTMLElement = sliderDE.nativeElement;
    const slider = sliderEL.querySelector('mat-slider#redSlider');

    const spy = spyOn(component, 'changeColorValue');

    slider.dispatchEvent(new MouseEvent('mousedown'));
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should lock the color selection when the slider is switched', () => {
    const dElement: DebugElement = fixture.debugElement;
    const sElement: HTMLElement = dElement.nativeElement;

    // let's grab our slider to check the disabled status later
    const slider = sElement.querySelector('mat-slider#redSlider');
    // and we want our slideToggle. We go to the highest level of this element
    // right now, so we can be sure to grab the right one by ID
    const slideToggle = sElement.querySelector('mat-slide-toggle#redToggle');
    // and here's the nested element we need. The input is what actually sets the value of this element!
    // It's mat-slide-toggle -> label -> then both mat-slide-toggle-bar and mat-slide-toggle-content
    // now we have an input with a role of "switch", which is what we want to click, and a toggle thumb container which
    // is the nub inside of the toggle bar.
    const slideToggleBarInput = slideToggle.querySelector('input.mat-slide-toggle-input');

    slideToggleBarInput.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();

    expect(slider.getAttribute('ng-reflect-disabled')).toBeTruthy();
  });
});
