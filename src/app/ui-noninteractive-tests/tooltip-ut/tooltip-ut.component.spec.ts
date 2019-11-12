import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTooltipModule } from '@angular/material/tooltip';
// we'll use this in case we're testing on a non-html platform
import { DebugElement } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
      imports: [MatTooltipModule, NoopAnimationsModule]
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
  it('should have the tooltip on the button', () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const button = buttonEl.querySelector('button');

    // looking at the button element we're attached to,
    // the aria-describedby attribute on the button looks like this
    // aria-describedby="cdk-describedby-message-NN", where NN is the number of the message
    // as described in the div with that name that resides in
    // the div with id cdk-describedby-message-container (our overlay container)
    // console.log(button.getAttribute('aria-describedby'));

    // When we're looking for the element ID pointed to above,
    // it's important to note that this element is in the DOCUMENT not in the COMPONENT!
    // and since this is a search by ID, there should be exactly one of these elements
    // so we use querySelector
    const divato = document.querySelector(
      '#' + button.getAttribute('aria-describedby')
    );
    // console.log(divato);

    // And we can get the text of the tooltip by looking at the innerText or textContent attributes
    // console.log(divato.textContent);
    // console.log(divato.innerHTML);

    expect(divato.textContent).toEqual(component.tooltipText);
  });

  it('should have the default tooltip on the input', () => {
    const inputDe: DebugElement = fixture.debugElement;
    const inputEl: HTMLElement = inputDe.nativeElement;
    const input = inputEl.querySelector('input');

    const divato = document.querySelector(
      '#' + input.getAttribute('aria-describedby')
    );

    expect(divato.textContent).toEqual(component.inputTooltipText);
  });

  // we're going to test this in the dom, and not just by checking that the values
  // of our variables are changing in the code.
  // Why you ask? 
  // What if I was updating the html and put in the wrong varible for the 
  // tooltip text on that input?
  // What if I had more going on in my method that changed that tooltip,
  // like it changed multiple tooltips, or changed the tooltip based on other code
  // and I auto-completed the wrong tooltip to change?
  // I might not catch that in a purely code situation.
  // Why don't we test deeper on the dom for this? Like, does the tooltip show
  // up when we hover?  We might want to. I had a test in here that did just that.
  // Though we're dangerously close to getting into the 
  // business of testing code that wasn't ours. If the tooltip doesn't trigger,
  // is that our code or would that be the frameworks?  Hmmmm...
  it('should change the input tooltip text when the button is clicked', () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const button = buttonEl.querySelector('button');

    const inputDe: DebugElement = fixture.debugElement;
    const inputEl: HTMLElement = inputDe.nativeElement;
    const input = inputEl.querySelector('input');

    // making sure it's the default
    const divato = document.querySelector(
      '#' + input.getAttribute('aria-describedby')
    );

    // console.log(divato.textContent);
    // console.log(component.inputTooltipText);

    expect(divato.textContent).toEqual(component.inputTooltipText);

    // clicking our button, easy!
    button.click();
    // if we don't do this, we won't see any change!  Go ahead, comment
    // this out and see what the log says
    fixture.detectChanges();

    const changedDivato = document.querySelector(
      '#' + input.getAttribute('aria-describedby')
    );

    // console.log(changedDivato.textContent);
    // console.log(component.inputTooltipText);

    expect(changedDivato.textContent).toEqual(component.changedInputTooltipText);
  });
});
