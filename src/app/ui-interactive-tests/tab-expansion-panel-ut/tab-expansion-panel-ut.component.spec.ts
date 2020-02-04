import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule, MatTabLabel } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabExpansionPanelUtComponent } from './tab-expansion-panel-ut.component';

describe('TabExpansionPanelUtComponent', () => {
  let component: TabExpansionPanelUtComponent;
  let fixture: ComponentFixture<TabExpansionPanelUtComponent>;

  const expectedTabLabels = ['Beef', 'Chicken', 'Pork'];

  const beefMenu = [
    {
      name: 'Filet',
      description: 'Yummy',
      img: ''
    },
    {
      name: 'T-bone',
      description: 'Good',
      img: ''
    }
  ];

  const chickenMenu = [
    {
      name: 'Grilled breast',
      description: 'Yummy',
      img: ''
    },
    {
      name: 'Fried drumsticks',
      description: 'Good',
      img: ''
    }
  ];

  const porkMenu = [
    {
      name: 'Tenderloin Medalliion',
      description: 'Yummy',
      img: ''
    },
    {
      name: 'Steak',
      description: 'Good',
      img: ''
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TabExpansionPanelUtComponent],
      imports: [MatExpansionModule, MatTabsModule, BrowserAnimationsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabExpansionPanelUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Do we have the right tabs showing?
  it('should have the correct tabs', () => {
    fixture.whenRenderingDone().then(() => {
      const tabLabels = document.querySelectorAll(
        '#menu .mat-tab-label-content'
      );

      Array.from(tabLabels).forEach(element => {
        expect(expectedTabLabels).toContain(element.textContent);
      });
    });
  });

  // Do we have the right data in the beef tab?
  it('should have the correct data in the beef tab', () => {
    // mat-tab-header will have ng-reflect-selected-index
    // using our id, we can dive right into the elements we want to see
    const expansionPanels = document.querySelectorAll(
      'mat-accordion#beef mat-expansion-panel'
    );

    Array.from(expansionPanels).forEach(element => {
      const headerTitle = element.querySelector(
        'mat-expansion-panel-header mat-panel-title'
      );
      const headerDescription = element.querySelector(
        'mat-expansion-panel-header mat-panel-description'
      );

      const content = element.querySelector('div .mat-expansion-panel-body');

      expect(beefMenu).toContain(
        jasmine.objectContaining({
          // Trim this content! There might be whitespace in front or back of the content to make it look good
          name: headerTitle.textContent.trim(),
          description: headerDescription.textContent.trim(),
          img: content.textContent.trim()
        })
      );
    });
  });

  // Do we have the right data in the chicken tab? This is a bit longer
  // than the last test, cause our Beef tab is the default so we have
  // to grab this one
  it('should have the correct data in the chicken tab', () => {
    // mat-tab-header will have ng-reflect-selected-index
    // using our id, we can dive right into the elements we want to see
    // const tabs = document.getElementsByClassName('mat-tab-label-content');

    // chicken is at index 1, so 0-1
    const labelContainer = document.getElementsByClassName('mat-tab-labels')[0];

    let theElement: ChildNode;

    labelContainer.childNodes.forEach(element => {
      if (element.textContent === expectedTabLabels[1]) {
        console.log('the element ', element.textContent);
        theElement = element;
      }
    });

    theElement.dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();

    // things they are a changing
    // so let's wait till they're done, then we can select
    // the right accordian to test
    // this is also how we move in and test our expansion panels! Let's see
    fixture.whenStable().then(() => {
      const expansionPanels = document.querySelectorAll(
        'mat-accordion#chicken  mat-expansion-panel'
      );

      // let's grab our header info
      Array.from(expansionPanels).forEach(element => {
        const headerTitle = element.querySelector(
          'mat-expansion-panel-header mat-panel-title'
        );
        const headerDescription = element.querySelector(
          'mat-expansion-panel-header mat-panel-description'
        );

        // and our body stuff
        const content = element.querySelector('div .mat-expansion-panel-body');

        // now easy enough! We can create an object
        // with the amount of data we need to validate
        // this can be all elements, or just some. Then we test against
        // our expected results
        expect(chickenMenu).toContain(
          jasmine.objectContaining({
            // Trim this content! There might be whitespace in front or back of the content to make it look good
            name: headerTitle.textContent.trim(),
            description: headerDescription.textContent.trim(),
            img: content.textContent.trim()
          })
        );
      });
    });
  });
});
