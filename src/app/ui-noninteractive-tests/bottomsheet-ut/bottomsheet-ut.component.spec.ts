import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatBottomSheetModule } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  BottomsheetUtComponent,
  BottomSheetOverviewExampleSheetComponent
} from './bottomsheet-ut.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('ui-noninteractive - BottomsheetUtComponent', () => {
  let component: BottomsheetUtComponent;
  let fixture: ComponentFixture<BottomsheetUtComponent>;

  // as always, these would come from a service in the component,
  // and we'd either grab from the api to build our test data, or
  // hand build this
  const testMessages = [
    { from: 'Jim', content: 'Do you have the new file?' },
    { from: 'You', content: "I don't, can you resend?" },
    { from: 'Jim', content: 'Yep. Just sent. Let me know if you get it.' },
    { from: 'You', content: 'Got it, thanks!' }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BottomsheetUtComponent,
        BottomSheetOverviewExampleSheetComponent
      ],
      imports: [
        MatBottomSheetModule,
        MatIconModule,
        MatListModule,
        BrowserAnimationsModule
      ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [BottomSheetOverviewExampleSheetComponent]
      }
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomsheetUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // we'll break up some of these calls, and then combine them into a larger expect
  it('Should call our bottom sheet display method on button press', () => {
    const theSpy = spyOn(component, 'openBottomSheet');

    const svgButton = document.getElementById('oursvg');
    const mouseEvent = new MouseEvent('click');

    svgButton.dispatchEvent(mouseEvent);
    fixture.detectChanges();
    expect(theSpy).toHaveBeenCalled();
  });

  it('Should call our chat service and show the bottom sheet with appropriate messages', () => {
    // we're not calling a service for realz. If we did we'd use the HttpClientTestingModule
    // and flush our expected results to be sure we are seeing the right stuff
    // I'll just check that the right info is being displayed. We might break this out
    // as our view component, our bottom sheet component, and our item component
    // in three distinct components inside of a module to make each bit easier to test
    // and maintain. We won't do that here.
    const svgButton = document.getElementById('oursvg');
    const mouseEvent = new MouseEvent('click');

    component.messages = testMessages;

    svgButton.dispatchEvent(mouseEvent);
    fixture.detectChanges();

    let ourMessageListArray;

    // this will change based on how you set up the container
    // in our case we have our overview example sheet, in the bottom sheet,
    // in that we have a list. So let's jump right to the list!
    const ourMessageList = document.querySelector(
      'app-bottom-sheet-overview-example-sheet mat-list'
    );

    // swap it to an array so we can iterate and grab each mat-list-item's goodness
    ourMessageListArray = Array.from(
      ourMessageList.getElementsByClassName('mat-list-item')
    );

    // now we can iterate through our items, build a little object,
    // and make sure it exists in our test massages above
    // we can use a similar method to test actions on the items,
    // like deleting items from the list.
    ourMessageListArray.forEach(item => {
      const from = item.getElementsByClassName('from')[0].textContent.trim();
      const content = item
        .getElementsByClassName('content')[0]
        .textContent.trim();

      expect(testMessages).toContain(
        jasmine.objectContaining({
          from,
          content
        })
      );
    });
  });

  it('Should show our bottom sheet on button press', () => {
    const svgButton = document.getElementById('oursvg');
    const mouseEvent = new MouseEvent('click');

    svgButton.dispatchEvent(mouseEvent);
    fixture.detectChanges();

    const bottomSheet = document.getElementsByTagName(
      'mat-bottom-sheet-container'
    );

    expect(bottomSheet).toBeTruthy();
  });
});
