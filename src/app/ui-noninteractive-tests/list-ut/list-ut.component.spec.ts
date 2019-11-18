import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUtComponent } from './list-ut.component';

describe('ui-noninteractive - ListUtComponent', () => {
  let component: ListUtComponent;
  let fixture: ComponentFixture<ListUtComponent>;

  const listItems = [
    {
      name: 'item one',
      description: 'This is item one',
      avatar: 'https://commons.wikimedia.org/wiki/File:1000BlueBull.jpg',
      category: 'land'
    },
    {
      name: 'item two',
      description: 'This is item two',
      avatar: 'https://commons.wikimedia.org/wiki/File:102Cervus.jpg',
      category: 'land'
    },
    {
      name: 'item three',
      description: 'This is item three',
      avatar: 'https://commons.wikimedia.org/wiki/File:10BlackBuck.jpg',
      category: 'land'
    },
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


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListUtComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
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

    const landAnimals = listItems.filter((animal) => animal.category === 'land' );
    console.log(landAnimals);
    // we would most likely get our data from a service, either to retreive
    // it from a DB or a web API.  Here were smushing that into a call to
    // getLandAnimals in the same component for show.
    spyOn(component, 'getLandAnimals').and.returnValue(listItems);

    // this method will call the getLandAnimals method, which will be intercepted above
    component.showFilteredAnimals('land');

    // we need to check between the displayed list and what we have in landAnimals
    // we could just check between landAnimals and the output of showFilteredAnimals but
    // that really does not meet our needs

  });

  it('should show the user the correct avatar', () => {});

});
