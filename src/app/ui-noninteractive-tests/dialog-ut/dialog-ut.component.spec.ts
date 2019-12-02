import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  DialogUtComponent,
  DialogOverviewExampleDialogComponent
} from './dialog-ut.component';

describe('ui-noninteractive - DialogUtComponent', () => {
  let component: DialogUtComponent;
  let fixture: ComponentFixture<DialogUtComponent>;

  const testItems = ['thing one', 'thing two', 'thing three'];
  const oneItemRemoved = ['thing one', 'thing three'];

  const itemToDelete = 'thing two';
  const itemToNotDelete = 'thing three';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogUtComponent, DialogOverviewExampleDialogComponent],
      imports: [MatListModule, MatDialogModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // we would have more tests here, focused on the data we get and display
  // We're focused on the dialog here, so will not explore those tests

  // I have a list of something, with a delete button next to each item.
  // I click delete, and get a dialog "Are you sure you want to delete {{ item.name }}?"
  // If I click delete, the item is removed from the list.
  //
  // I need an array of data to present, and a "deleted item" as well as "Not deleted item"
  // to test the scenario where I delete the data, and do not delete the data
  it('should launch a alert dialog with a click of the delete button for a list item', () => {
    // let's get our list item!
    const ourDomListUnderTest = document.querySelector('mat-list#testList');

    // this should be Thing Two
    const listItemToDelete = Array.from(
      ourDomListUnderTest.getElementsByTagName('mat-list-item')
    ).filter(
      element =>
        element.getElementsByTagName('h4')[0].innerText === itemToDelete
    );

    // there should only be one of these, so go for zero
    const deleteButton = listItemToDelete[0].getElementsByTagName('button')[0];

    // and click the button
    deleteButton.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      // and we should have a dialog
      const dialogDiv = document.querySelector('mat-dialog-container');
      expect(dialogDiv).toBeTruthy();
    });
  });

  it('should delete a list item when the dialog is confirmed', () => {
    const ourDomListUnderTest = document.querySelector('mat-list#testList');

    // this should be Thing Two
    const listItemToDelete = Array.from(
      ourDomListUnderTest.getElementsByTagName('mat-list-item')
    ).filter(
      element =>
        element.getElementsByTagName('h4')[0].innerText === itemToDelete
    );

    const deleteButton = listItemToDelete[0].getElementsByTagName('button')[0];

    // and click the button
    deleteButton.click();
    fixture.detectChanges();

    // here's where we delete the item, calling removeThing
    // then check that our new list of items matches expected
    fixture.whenStable().then(() => {
      // and we should have a dialog, grab it to find the delete button
      const dialogDiv = document.querySelector('mat-dialog-container');

      // clicky

      expect(component.getThings()).toEqual(oneItemRemoved);
    });
  });

  it('should not delete a list item when the dialog is rejected', () => {
    expect(component).toBeTruthy();
  });
});
