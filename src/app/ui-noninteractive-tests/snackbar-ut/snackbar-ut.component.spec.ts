import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
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

  it('should trigger a snackbar notification when action is taken on the first snackbar', async () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const button = buttonEl.querySelector('button');

    button.click();
    fixture.detectChanges();

    spyOn(component, 'openSnackBarComponent');

    const snackingDivButton: HTMLButtonElement = document.querySelector('div.mat-simple-snackbar-action button');
    snackingDivButton.click();

    console.log(snackingDivButton);
    fixture.detectChanges();

    expect(component.openSnackBarComponent).toHaveBeenCalled();
    // expect(snackingDivButton).toBeTruthy();
  });

  // these are not great tests, we're really testing core functionality and not our
  // business process.  Now, if the action on our snackbar was to trigger some other
  // process, test away!
  it('should do nothing if the first snackbar action is not pressed', () => {});

  it('should dismiss the second snackbar notification when the dismiss button is pressed', () => {});

  it('should dismiss the second snackbar after a 5 second delay', () => {});
});
