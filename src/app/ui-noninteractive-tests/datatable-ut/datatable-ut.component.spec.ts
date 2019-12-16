import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableUtComponent } from './datatable-ut.component';
import { MatTableModule } from '@angular/material/table';

describe('ui-noninteractive - DatatableUtComponent', () => {
  let component: DatatableUtComponent;
  let fixture: ComponentFixture<DatatableUtComponent>;

  const dataDump = [
    {
      name: 'Bear',
      type: 'animal',
      size: 'large'
    },
    {
      name: 'Hamburger',
      type: 'food',
      size: 'small'
    },
    {
      name: 'Dog',
      type: 'animal',
      size: 'medium'
    },
    {
      name: 'Cat',
      type: 'animal',
      size: 'small'
    },
    {
      name: 'Hotdog',
      type: 'food',
      size: 'small'
    },
    {
      name: 'Sheetcake',
      type: 'food',
      size: 'medium'
    },
    {
      name: 'Burrito',
      type: 'food',
      size: 'grande'
    },
    {
      name: 'Elephant',
      type: 'animal',
      size: 'xLarge'
    }
  ];

  const validAnimals = [
    {
      name: 'Bear',
      type: 'animal',
      size: 'large'
    },
    {
      name: 'Dog',
      type: 'animal',
      size: 'medium'
    },
    {
      name: 'Cat',
      type: 'animal',
      size: 'small'
    },
    {
      name: 'Elephant',
      type: 'animal',
      size: 'xLarge'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatatableUtComponent],
      imports: [MatTableModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // we might be tempted to test some of the built in functionality of the data-table. This would include
  // things like pagination and sorting. We have to be cautious about delving into the realm of
  // testing other people's code, particularly when it's part of a larger library provided to us.
  // Here what we want to be sure of, is that we are displaying the appropriate data and interactive
  // elements, initially in the order we want, with the data elements that we expect.
  // In our example, we want the food data to be displayed initially in alpha by Name,
  // no interactive elements, and it should display the Name, Origin and Base_Ingredient elements.
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show our animal data', () => {
    // let's get our datatable item!
    const ourDomTableUnderTest = document.querySelector('table#testTable');

    // // this should be animals put in our table
    // const animalsInTable = Array.from(
    //   ourDomTableUnderTest.getElementsByTagName('.mat-row')
    // );
    const animalsInTable = Array.from(
      ourDomTableUnderTest.getElementsByClassName('mat-row')
    );

    // we can choose specific columns here, we don't necessarily need them all
    // just enough to find each item, that makes each row unique
    animalsInTable.forEach(animal => {
      // lets get the data from our columns.
      // The classname is mat-column-{columnName}
      const animalName = animal
        .getElementsByClassName('mat-column-name')
        .item(0).textContent;
      const animalType = animal
        .getElementsByClassName('mat-column-type')
        .item(0).textContent;
      const animalSize = animal
        .getElementsByClassName('mat-column-size')
        .item(0).textContent;

      // check if the anmials are in our final list. Create our object with the data above
      // and use jasmine.objectContaining
      expect(validAnimals).toContain(
        jasmine.objectContaining({
          type: animalType,
          name: animalName,
          size: animalSize
        })
      );
    });
  });

  it('should show the columns we expect', () => {
    // let's get our datatable item!
    const ourDomTableUnderTest = document.querySelector('table#testTable');

    // // this should be animals put in our table
    // const animalsInTable = Array.from(
    //   ourDomTableUnderTest.getElementsByTagName('.mat-row')
    // );
    const tableHeaders = Array.from(
      ourDomTableUnderTest.getElementsByClassName('mat-header-cell')
    );
    const headerClasses = [
      'mat-column-name',
      'mat-column-type',
      'mat-column-size'
    ];

    // let's check against our expected. There's a gap here,
    // we check that each expected header is in the list, but
    // not that there are extra headers we don't expect
    tableHeaders.forEach(header => {
      expect(
        headerClasses.some(item => header.classList.contains(item))
      ).toBeTruthy();
    });
  });
});
