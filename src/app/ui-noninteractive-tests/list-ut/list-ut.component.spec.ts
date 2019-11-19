import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';

import { ListUtComponent } from './list-ut.component';
import { DebugElement } from '@angular/core';

describe('ui-noninteractive - ListUtComponent', () => {
  let component: ListUtComponent;
  let fixture: ComponentFixture<ListUtComponent>;

  const landAnimals = [
    {
      name: 'Blue Bull',
      description: 'This is a Blue Bull',
      avatar: 'https://commons.wikimedia.org/wiki/File:1000BlueBull.jpg',
      category: 'land'
    },
    {
      name: 'Cervus',
      description: 'This is a Cervus',
      avatar: 'https://commons.wikimedia.org/wiki/File:102Cervus.jpg',
      category: 'land'
    },
    {
      name: 'Black Buck',
      description: 'This is a Black Buck',
      avatar: 'https://commons.wikimedia.org/wiki/File:10BlackBuck.jpg',
      category: 'land'
    }
  ];

  const airAnimals = [
    {
      name: 'item four',
      description: 'This is item four',
      avatar: 'https://commons.wikimedia.org/wiki/File:3617brahminy-mynah.jpg',
      category: 'air'
    },
    {
      name: 'item five',
      description: 'This is item five',
      avatar:
        'https://commons.wikimedia.org/wiki/File:2005-malabar-parkeet-p.jpg',
      category: 'air'
    }
  ];

  const listItems = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatListModule],
      declarations: [ListUtComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    // we split our array into the categories we're going to test for,
    // this way we have something to run our expect call against without
    // actually coding the filter here.  We want to write as little code
    // as possible in our tests!
    listItems.concat(landAnimals, airAnimals);

    fixture = TestBed.createComponent(ListUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // let's have an array of items with different categories
  // when a UI button is clicked, it shows the appropriate list
  it('should create a list with land animals', () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const button = buttonEl.querySelector('button');

    const animalType = 'land';

    // we would most likely get our data from a service, either to retreive
    // it from a DB or a web API.  Here were smushing that into a call to
    // getLandAnimals in the same component for show.
    // but this mocked call could be the same!
    spyOn(component, 'getLandAnimals').and.returnValue(landAnimals);

    // this method will call the getLandAnimals method, which will be intercepted above
    button.click();
    fixture.detectChanges();

    // find our mat list. It's in our best interest to add an id to elements
    // so in cases like this, and styling, we can find that element.
    fixture.whenStable().then(() => {
      const ourDomListUnderTest = document.querySelector(
        'mat-list#' + animalType
      );

      // here is where we would put our expect clause to look at the children,
      // then pick the attributes and test the array against those attributes
      ourDomListUnderTest.childNodes.forEach(matListItem =>
        matListItem.childNodes.forEach(item => console.log("ze item" + item.textContent))
      );
    });

    // we need to check between the displayed list and what we have in landAnimals
    // we could just check between landAnimals and the output of showFilteredAnimals but
    // that really does not meet our needs
  });

  it('should show the user the correct avatar', () => {});

  it('should show a list with subheaders based on category', () => {});
});
