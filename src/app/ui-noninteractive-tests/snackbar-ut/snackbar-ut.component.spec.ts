import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import {
  MatSnackBarModule
} from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarUtComponent } from './snackbar-ut.component';
import { DebugElement } from '@angular/core';

describe('ui-noninteractive - SnackbarUtComponent', () => {
  let component: SnackbarUtComponent;
  let fixture: ComponentFixture<SnackbarUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarUtComponent],
      imports: [MatSnackBarModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // the "should create a snackbar" would be us saying
  // it should "take action" in a nice real test
  // like "it should save the order" or "validate the ticket"
  // the snackbar should be a result of some other thing, not just pressing a button
  it('should create a snackbar from a message when the button is clicked', () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;

    // In our case, we have multiple buttons on the page. So it makes sense
    // to give that button an ID and ref it from there.
    // we add in the 'as' clause otherwise it's going to return an element, which
    // won't have the click event.
    // This isn't all bad, we could always use dispatchEvent, but just as easy
    // to coerce the button into a type it should be.
    const button = buttonEl.querySelector(
      'button#messageButton'
    ) as HTMLButtonElement;

    // make sure to call detectChanges after initiating some action!
    // otherwise the fixture won't know it happened.
    button.click();
    fixture.detectChanges();

    // our snackbar message lives in
    // div#cdk-overlay-container -> div#cdk-global-overlay-wrapper -> div#cdk-overlay-0
    // -> snack-bar-container.mat-snack-bar-container
    // and in that the message and action are in
    // -> simple-snack-bar.mat-simple-snackbar (message) -> div.mat-simple-snackbar-action -> button

    const snackingDiv = document.querySelector('snack-bar-container');
    expect(snackingDiv).toBeTruthy();
  });

  // same as above, only using a component for our snackbar
  it('should create a snackbar using our component when the button is clicked', () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;

    const button = buttonEl.querySelector(
      'button#compButton'
    ) as HTMLButtonElement;

    button.click();
    fixture.detectChanges();

    const snackingDiv = document.querySelector('snack-bar-container');
    expect(snackingDiv).toBeTruthy();
  });

  // if we were calling out, we might want to mock the service or component
  // and return some value just to be sure the stuff works.
  // We always want to isolate the SUT.
  // In this case we're saying the code that is being called is part of
  // the same component
  it('should do a thing when action is taken on the first snackbar', () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const button = buttonEl.querySelector('button');

    // We're playing here! I'm acting as if the observeSnackBarOnAction method
    // is calling out maybe to a service, or some other place, and not that
    // it's calling a method in our own class. Because that's probably what you
    // would want to do (delegate to some other class for the process behind the
    // button press)
    const ourSpy = spyOn(component, 'observeSnackBarOnAction').and.callFake(
      () => {
        console.log('We could use a mock or stub here!');
      }
    );

    // click to get our first snackbar
    button.click();
    fixture.detectChanges();

    // find the button on our first snackbar
    const snackingDivButton = document.querySelector(
      'div.mat-simple-snackbar-action button'
    );

    // click the button on our first snackbar This will trigger our click event
    // This time I'll use dispatchEvent, to show how to do this, if we didn't want
    // to coerce into an HTMLButtonElement
    const mouseEvent = new MouseEvent('click');
    snackingDivButton.dispatchEvent(mouseEvent);
    // still need this!
    fixture.detectChanges();

    // I'm including our whenRenderingDone call in Jasmine here because we're looking at UI events.
    // I'm also, below this, using and expect WITHOUT waiting for rendering.
    // Both will pass.
    fixture.whenRenderingDone().then(() => {
      expect(ourSpy).toHaveBeenCalled();
    });

    expect(ourSpy).toHaveBeenCalled();
  });

});
