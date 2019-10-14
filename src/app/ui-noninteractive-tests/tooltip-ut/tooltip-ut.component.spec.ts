import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltipModule } from '@angular/material/tooltip';
// we'll use this in case we're testing on a non-html platform
import { DebugElement } from '@angular/core';

import { TooltipUtComponent } from './tooltip-ut.component';
import { JsonpClientBackend } from '@angular/common/http';

describe('ui-noninteractive - TooltipUtComponent', () => {
  let component: TooltipUtComponent;
  let fixture: ComponentFixture<TooltipUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipUtComponent],
      // We need to import the tooltip module, or we'll get errors that
      // the material module we're testing isn't a known property
      imports: [MatTooltipModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the default tooltip when hovering over the button', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const button = bannerEl.querySelector('button');

    expect(button.getAttribute('ng-reflect-message')).toEqual(
      component.tooltipText
    );
  });

  it('should change the tooltip text when the button is clicked', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const button = bannerEl.querySelector('button');

    // clicking our button, easy!
    button.click();
    // if we don't do this, we won't see any change!  Go ahead, comment
    // this out and see what the log says
    fixture.detectChanges();
    console.log(button.getAttribute('ng-reflect-message'));

    expect(button.getAttribute('ng-reflect-message')).toEqual(component.tooltipText);
  });
});
