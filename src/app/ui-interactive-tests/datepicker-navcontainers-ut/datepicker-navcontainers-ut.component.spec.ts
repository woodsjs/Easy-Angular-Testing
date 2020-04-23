import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerNavcontainersUtComponent } from './datepicker-navcontainers-ut.component';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('DatepickerNavcontainersUtComponent', () => {
  let component: DatepickerNavcontainersUtComponent;
  let fixture: ComponentFixture<DatepickerNavcontainersUtComponent>;

  const monthValues = [
    { name: 'january', text: 'January', cheese: 'January is a month of cold.' },
    { name: 'february', text: 'February', cheese: 'february is big and bold.' },
    { name: 'march', text: 'March', cheese: 'march along like a trooper.' },
    { name: 'april', text: 'April', cheese: 'april lions are super.' },
    {
      name: 'may',
      text: 'May',
      cheese: 'may I have some sunshine please?',
    },
    {
      name: 'june',
      text: 'June',
      cheese: 'june the dogs lay out, with fleas.',
    },
    {
      name: 'july',
      text: 'July',
      cheese: "july it's hot, but not as hot.",
    },
    {
      name: 'august',
      text: 'August',
      cheese: "as august dog's days are at the top.",
    },
    {
      name: 'september',
      text: 'September',
      cheese: 'september we see the cold come in.',
    },
    {
      name: 'october',
      text: 'October',
      cheese: 'october the snow may start again.',
    },
    {
      name: 'november',
      text: 'November',
      cheese: "november we're done but time is left.",
    },
    {
      name: 'december',
      text: 'December',
      cheese: 'december our boots are quite bereft.',
    },
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        BrowserAnimationsModule,
      ],
      declarations: [DatepickerNavcontainersUtComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatepickerNavcontainersUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change the text when a date is chosen from the datepicker', () => {
    // get the datepicker

    // get the cdk options

    // select the options

    // get the text from the mat-sidenav-content

    // check that the text matches teh expected
    expect(component).toBeTruthy();
  });

  // mat-sidenav hierarchy is mat-sidenav -> div.mat-drawer-inner-container -> elements (in our case buttons)
  // we have month buttons in the sidenav. When a user clicks on one, the text in the main container
  // shows them the cheesy text that corresponds to that month.
  it('should change the text when a month is chosen from the sidenav', () => {
    const sidenavContainer = fixture.debugElement.query(
      By.css('mat-sidenav div.mat-drawer-inner-container')
    ).nativeElement;

    for (const element of sidenavContainer.children) {
      element.click();
      fixture.detectChanges();

      const mainContentText = fixture.debugElement.query(By.css('mat-sidenav-content span')).nativeElement;
      const expectedCheese = monthValues.filter((value) => value.name === element.getAttribute('id'));

      expect(mainContentText.innerText).toEqual(expectedCheese[0].cheese);
    }
  });

  it('should add the buttons we expect to the mat-sidenav container', () => {
    expect(component).toBeTruthy();
  });
});
