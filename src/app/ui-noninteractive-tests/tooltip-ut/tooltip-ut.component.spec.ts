import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltipModule } from '@angular/material/tooltip';
// we'll use this in case we're testing on a non-html platform
import { DebugElement } from '@angular/core';

import { TooltipUtComponent } from './tooltip-ut.component';
import { By } from '@angular/platform-browser';

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

  // floating things use cdk-overlay
  it('should have the default tooltip if the button was not pressed', () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const button = buttonEl.querySelector('button');

    // looking at the button element we're attached to,
    // the aria-describedby attribute on the button looks like this
    // aria-describedby="cdk-describedby-message-NN", where NN is the number of the message
    // as described in the div with that name that resides in
    // the div with id cdk-describedby-message-container (our overlay container)
    console.log(button.getAttribute('aria-describedby'));

    // When we're looking for the element id pointed to above,
    // it's important to note that this element is in the DOCUMENT not in the COMPONENT!
    // and since this is a search by ID, there should be exactly one of these elements
    // so we use querySelector
    const divato = document.querySelector(
      '#' + button.getAttribute('aria-describedby')
    );
    console.log(divato);

    // And we can get the text of the tooltip by looking at the innerText or textContent attributes
    console.log(divato.textContent);
    console.log(divato.innerHTML);

    expect(divato.textContent).toEqual(component.tooltipText);
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

    // this is the same as the above code
    console.log(button.getAttribute('aria-describedby'));

    const divato = document.querySelector(
      '#' + button.getAttribute('aria-describedby')
    );
    console.log(divato);

    console.log(divato.textContent);
    console.log(divato.innerHTML);

    // we could probably check this based on the hard coded string in this test
    // in case the click event didn't change the text. That's not really the
    // point of these tests (testing clicks) so we'll do it this way
    expect(divato.textContent).toEqual(component.tooltipText);
  });

  it('should show the tooltip when hovering over the button', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const button = bannerEl.querySelector('button');

    const evt = new MouseEvent('mouseover');
    button.focus();
    button.dispatchEvent(evt);

    // fixture.detectChanges();
    const tooltipBox = bannerEl.getElementsByClassName(
      'mat-tooltip ng-trigger ng-trigger-state mat-tooltip-handset'
    );
  });
});
