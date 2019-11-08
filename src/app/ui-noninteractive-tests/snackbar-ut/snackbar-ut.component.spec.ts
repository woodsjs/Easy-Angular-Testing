import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarUtComponent } from './snackbar-ut.component';
import { DebugElement } from '@angular/core';
import { Observable, of } from 'rxjs';

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
  it('should create a snackbar when the button is clicked', () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;

    // we only have one button on the page, which makes this easy
    // use the selector that makes sense. You probably want to give that
    // button an id and class so you can find it more easily on a page with
    // many elements.
    const button = buttonEl.querySelector('button');

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

  // if we were calling out, we might want to mock the service or component
  // and return some value just to be sure the stuff works.
  // We always want to isolate the SUT.
  // In this case we're saying the code that is being called is part of
  // the same component
  it('should do a thing when action is taken on the first snackbar', async () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const button = buttonEl.querySelector('button');

    // this is a thing that should be done
    const zeSpy = spyOn(component, 'justWriteAConsoleLog').and.returnValue(
      of(true)
    );

    // click to get our first snackbar
    button.click();
    fixture.detectChanges();

    // find the button on our first snackbar
    const snackingDivButton = document.querySelector(
      'div.mat-simple-snackbar-action button'
    ) as HTMLButtonElement;

    // click the button on our first snackbar
    snackingDivButton.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      expect(zeSpy).toHaveBeenCalled();
    });
  });

  it('should call the second snackbar when the first snackbar action is pressed', () => {});

  // these are not great tests, we're really testing core functionality and not our
  // business process.  Now, if the action on our snackbar was to trigger some other
  // process, test away!
  it('should do nothing if the first snackbar action is not pressed', () => {});

  it('should dismiss the second snackbar notification when the dismiss button is pressed', () => {});

  it('should dismiss the second snackbar after a 5 second delay', () => {});
});
