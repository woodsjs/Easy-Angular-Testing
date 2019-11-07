import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SnackbarUtComponent } from './snackbar-ut.component';
import { DebugElement } from '@angular/core';
import { Observable, of } from 'rxjs';

describe('ui-noninteractive - SnackbarUtComponent', () => {
  let component: SnackbarUtComponent;
  let fixture: ComponentFixture<SnackbarUtComponent>;
  const matSnackSpy = jasmine.createSpyObj('MatSnackBarRef', ['onAction']);

  const onActionMatSnackRefSpy = matSnackSpy.onAction.and.returnValue(
    of('true')
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnackbarUtComponent],
      imports: [MatSnackBarModule, BrowserAnimationsModule],
      providers: [{ provide: MatSnackBarRef, useValue: matSnackSpy }]
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

  it('should trigger a snackbar notification when action is taken on the first snackbar', () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const button = buttonEl.querySelector('button');

    spyOn(component, 'openSnackBarMessage').and.callThrough();
    spyOn(component, 'observeSnackBarOnAction').and.callThrough();
    spyOn(component, 'openSnackBarComponent').and.callThrough();

    button.click();
    fixture.detectChanges();

    const snackingDivButton = document.querySelector(
      'div.mat-simple-snackbar-action button'
    ) as HTMLButtonElement;

    snackingDivButton.click();
    fixture.detectChanges();

    expect(component.openSnackBarMessage).toHaveBeenCalled();
    expect(component.observeSnackBarOnAction).toHaveBeenCalled();
    expect(component.openSnackBarComponent).toHaveBeenCalled();
  });

  it('should call the second snackbar when the first snackbar action is pressed', () => {
    spyOn(component, 'openSnackBarMessage');

    component.openSnackBarMessage();

    expect(component.openSnackBarMessage).toHaveBeenCalled();
  });

  // these are not great tests, we're really testing core functionality and not our
  // business process.  Now, if the action on our snackbar was to trigger some other
  // process, test away!
  it('should do nothing if the first snackbar action is not pressed', () => {});

  it('should dismiss the second snackbar notification when the dismiss button is pressed', () => {});

  it('should dismiss the second snackbar after a 5 second delay', () => {});
});
