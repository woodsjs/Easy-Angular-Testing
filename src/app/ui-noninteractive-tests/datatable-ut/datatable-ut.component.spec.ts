import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableUtComponent } from './datatable-ut.component';

describe('ui-noninteractive - DatatableUtComponent', () => {
  let component: DatatableUtComponent;
  let fixture: ComponentFixture<DatatableUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatatableUtComponent]
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

  it('should show our food data', () => {});

  it('should show our food data sorted by name in alpha order', () => {});

  it('should show the food name, country of origin and base ingredients element', () => {});
});
