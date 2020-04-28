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

  // if you don't want to do all this, you can probably follow the model from
  // the material tests and do
  // testComponent.selected = new Date(2017, JAN, 1);
  // fixture.detectChanges();
  // This is much more efficient, but not as fun to trace through :-)
  it('should change the text when a date is chosen from the datepicker', () => {
    // get the datepicker toggle, which contains a button, then get the button
    const mainDatePicker = fixture.debugElement.query(
      By.css('mat-datepicker-toggle#mainpicker button')
    ).nativeElement;

    mainDatePicker.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();

    // our body cells - we're in a year view first so we get the years
    const yearCells = fixture.debugElement.queryAll(
      By.css('.mat-calendar-body-cell')
    );

    // and we're fine with clicking any year
    yearCells[0].nativeElement.click();
    fixture.detectChanges();

    // now our table changed to month view, so get the first month
    const monthCells = fixture.debugElement.queryAll(
      By.css('.mat-calendar-body-cell')
    );
    // again clicking on any cell In this case, select the second. We want february since jan is the default
    monthCells[1].nativeElement.click();
    fixture.detectChanges();

    // now we would have our day view, so get the first day
    const dayCells = fixture.debugElement.queryAll(
      By.css('.mat-calendar-body-cell')
    );

    // again clicking on any cell
    dayCells[0].nativeElement.click();
    fixture.detectChanges();

    const mainContentText = fixture.debugElement.query(
      By.css('mat-sidenav-content span')
    ).nativeElement;

    // check that the text matches teh expected
    expect(mainContentText.innerText).toEqual(monthValues[1].cheese);
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

      const mainContentText = fixture.debugElement.query(
        By.css('mat-sidenav-content span')
      ).nativeElement;
      const expectedCheese = monthValues.filter(
        (value) => value.name === element.getAttribute('id')
      );

      expect(mainContentText.innerText).toEqual(expectedCheese[0].cheese);
    }
  });

  // we can check things a few ways.
  // I would typically put each of the expect statements into their own tests
  // but leave them all together here for brevity
  it('should add the buttons we expect to the mat-sidenav container', () => {
    const sidenavContainer = fixture.debugElement.query(
      By.css('mat-sidenav div.mat-drawer-inner-container')
    ).nativeElement;

    const arrayOfButtons = [];

    // grab all our buttons and save them in a list for a later test
    // and while we're on it check that this rendered button is in the list of expected items
    for (const element of sidenavContainer.children) {
      const expectedButtons = monthValues.filter(
        (value) => value.name === element.getAttribute('id')
      );

      arrayOfButtons.push(element.getAttribute('id'));
      expect(element.getAttribute('id')).toEqual(expectedButtons[0].name);
    }

    // we can check the lengths of our arrays too!
    expect(arrayOfButtons.length).toEqual(monthValues.length);

    // check our expected list against the button list
    // so we're checking in the opposite direction than the above test
    for (const expectedMonth of monthValues) {
      expect(arrayOfButtons).toContain(expectedMonth.name);
    }
  });
});
