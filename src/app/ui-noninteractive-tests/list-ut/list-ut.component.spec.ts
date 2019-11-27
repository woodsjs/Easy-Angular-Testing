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
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/7/72/1000BlueBull.jpg',
      category: 'land'
    },
    {
      name: 'Cervus',
      description: 'This is a Cervus',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/6/62/102Cervus.jpg',
      category: 'land'
    },
    {
      name: 'Black Buck',
      description: 'This is a Black Buck',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/f/f0/10BlackBuck.jpg',
      category: 'land'
    }
  ];

  const airAnimals = [
    {
      name: 'item four',
      description: 'This is item four',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/2/2f/3617brahminy-mynah.jpg',
      category: 'air'
    },
    {
      name: 'Malabar Parkeet',
      description: 'This is a parkeet',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/7/71/2005-malabar-parkeet-p.jpg',
      category: 'air'
    }
  ];

  const allAnimals = [
    {
      name: 'Blue Bull',
      description: 'This is a Blue Bull',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/7/72/1000BlueBull.jpg',
      category: 'land'
    },
    {
      name: 'Cervus',
      description: 'This is a Cervus',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/6/62/102Cervus.jpg',
      category: 'land'
    },
    {
      name: 'Black Buck',
      description: 'This is a Black Buck',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/f/f0/10BlackBuck.jpg',
      category: 'land'
    },
    {
      name: 'Mynah',
      description: 'This is a Mynah',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/2/2f/3617brahminy-mynah.jpg',
      category: 'air'
    },
    {
      name: 'Malabar Parkeet',
      description: 'This is a parkeet',
      avatar:
        'https://upload.wikimedia.org/wikipedia/commons/7/71/2005-malabar-parkeet-p.jpg',
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
    const button = buttonEl.querySelector('button#landAnimalButton');

    const animalType = 'land';

    // Here we are spying on a call to getAnimalsByType,
    // which will be called from our show method.
    // If we were getting this data from a service,
    // we would still spy on, and mock, that call.
    // The point here is that we shouldn't test functionality
    // from an outside service here, we should test the service
    // in that service's tests. So we trust the data from our
    // service is good, because it's tested already.
    spyOn(component, 'getAnimalsByType').and.returnValue(landAnimals);

    // this method will call the showFilteredAnimas method, which invokes
    // the getAnimalsByType method, which will be intercepted above
    const mouseEvent = new MouseEvent('click');
    button.dispatchEvent(mouseEvent);
    fixture.detectChanges();

    // find our mat list. It's in our best interest to add an id to elements
    // so in cases like this, and styling, we can find that element.
    fixture.whenStable().then(() => {
      const ourDomListUnderTest = document.querySelector(
        'mat-list#' + animalType
      );

      // here is where we would put our expect clause to look at the children,
      // then pick the attributes and test the array against those attributes

      // we need to check between the displayed list and what we have in landAnimals
      // we could just check between landAnimals and the output of showFilteredAnimals but
      // that really does not meet our needs. What we are doing is verifying our front end
      // is triggering the correct action to get land animals and display the right
      // content for those animals

      Array.from(ourDomListUnderTest.getElementsByTagName('h4')).forEach(
        element => {
          expect(landAnimals).toContain(
            jasmine.objectContaining({ name: element.innerText })
          );
        }
      );
    });
  });

  it('should create a list with all animals', () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const button = buttonEl.querySelector('button#allAnimals');

    const animalType = 'all';

    spyOn(component, 'getAllAnimals').and.returnValue(allAnimals);

    const mouseEvent = new MouseEvent('click');
    button.dispatchEvent(mouseEvent);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const ourDomListUnderTest = document.querySelector(
        'mat-list#' + animalType
      );

      Array.from(ourDomListUnderTest.getElementsByTagName('h4')).forEach(
        element => {
          expect(allAnimals).toContain(
            jasmine.objectContaining({ name: element.innerText })
          );
        }
      );
    });
  });

  // we can use the same stuff from above
  it('should show the user the correct avatar', () => {
    const buttonDe: DebugElement = fixture.debugElement;
    const buttonEl: HTMLElement = buttonDe.nativeElement;
    const button = buttonEl.querySelector('button#airAnimalButton');

    const animalType = 'land';

    spyOn(component, 'getAnimalsByType').and.returnValue(landAnimals);

    const mouseEvent = new MouseEvent('click');
    button.dispatchEvent(mouseEvent);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const ourDomListUnderTest = document.querySelector(
        'mat-list#' + animalType
      );

      // let's rip through this and create objects with name and avatar
      // then say, the object needs to contain both the name and avatar
      Array.from(
        ourDomListUnderTest.getElementsByTagName('mat-list-item')
      ).forEach(element => {
        const animalName = element.getElementsByTagName('h4')[0].innerText;
        const animalAvatar = element
          .getElementsByTagName('img')[0]
          .getAttribute('src');

        expect(landAnimals).toContain(
          jasmine.objectContaining({ name: animalName, avatar: animalAvatar })
        );
      });
    });
  });
});
