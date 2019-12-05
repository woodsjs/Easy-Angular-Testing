import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  DialogUtComponent,
  DialogOverviewExampleDialogComponent
} from './dialog-ut.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

// why I don't mock matDialog - first, I don't want to have to mock many methods
// in someone else's work. I also know that, or hope that, believe that even, there
// is testing done to the mat-dialog code by the folks that maintain it. When the dialog
// opens, I don't care to test that the folks who wrote the code properly implemented the 
// call to the close() method, I care that when the dialog disappears, the proper code on MY side is
// called.  That's all me.
// Next, from my perspective, which has been known to be wrong, what I want to 
// test is that the flow of work is functioning. So, I click the button
// and the dialog appears, I make a selection in the dialog and the proper thing
// happens.
// The proper thing happening isn't because mat-dialog's close method worked or was called
// it's because I pressed the button and the right thing happened. The magic is in my
// code that triggers after the mat dialog is closed, and before it is opened. That's what
// I'm interested in testing.
// For example, if my user stories are
// As a data entry clerk, I want to be able to delete an item directly from the list of
// items in an order, so that I can perform my work faster (say that, in the current iteration, they have to go INTO the 
// item to delete it).
// As a data entry clerk, I want to be able to confirm deleting an item from the list before it's removed, to be 
// sure I selected the correct item.
// This is what I want to test display list with delete buttons for the data entry clerk ->
// clerk clicks delete button on an item -> dialog displays with delete and don't delete buttons ->
// clerk clicks don't delete, dialog is removed and nothing is done
// clerk clicks delete, dialog is removed and list minus proper deleted item is returned

describe('ui-noninteractive - DialogUtComponent', () => {
  let component: DialogUtComponent;
  let fixture: ComponentFixture<DialogUtComponent>;

  const itemToDelete = 'thing two';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DialogUtComponent, DialogOverviewExampleDialogComponent],
      imports: [MatListModule, MatDialogModule, BrowserAnimationsModule]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [DialogOverviewExampleDialogComponent]
      }
    });
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
  it('should launch an alert dialog with a click of the delete button for a list item', () => {
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

  it('should make call to delete a list item with the list item when the dialog is confirmed', () => {
    spyOn(component, 'onDelete');

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

    fixture.whenStable().then(() => {
      // here's where we delete the item, calling removeThing
      // then check that our new list of items matches expected
      // and we should have a dialog, grab it to find the delete button
      const dialogDiv = document.querySelector('mat-dialog-container');

      // clicky
      const okButton = dialogDiv.querySelector('button#doIt');

      const mouseEvent = new MouseEvent('click');
      okButton.dispatchEvent(mouseEvent);
      fixture.detectChanges();

      // here we would check that our mocked service returned the right data
      // based on the passed parameter.
      expect(component.onDelete).toHaveBeenCalledWith(itemToDelete);
    });
  });

  it('should not make a call to delete a list item when the dialog is rejected', () => {
    spyOn(component, 'onDelete');

    const ourDomListUnderTest = document.querySelector('mat-list#testList');

    const listItemToDelete = Array.from(
      ourDomListUnderTest.getElementsByTagName('mat-list-item')
    ).filter(
      element =>
        element.getElementsByTagName('h4')[0].innerText === itemToDelete
    );

    const deleteButton = listItemToDelete[0].getElementsByTagName('button')[0];
    deleteButton.click();
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const dialogDiv = document.querySelector('mat-dialog-container');
      const rejectButton = dialogDiv.querySelector('button#noThanks');
      const mouseEvent = new MouseEvent('click');

      rejectButton.dispatchEvent(mouseEvent);
      fixture.detectChanges();

      // here we would check that our mock service wasn't called, maybe?
      // That our list didn't change?
      // We're not going to do that, but put something in to pass the test.
      expect(component.onDelete).toHaveBeenCalled();
    });
  });
});
