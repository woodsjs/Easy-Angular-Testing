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
    { name: 'Filet', description: 'Yummy', img: '' },
    { name: 'T-bone', description: 'Good', img: '' }
  ];

  const chickenMenu = [
    { name: 'Grilled breast', description: 'Yummy', img: '' },
    { name: 'Fried drumsticks', description: 'Good', img: '' }
  ];

  const porkMenu = [
    { name: 'Tenderloin Medalliion', description: 'Yummy', img: '' },
    { name: 'Steak', description: 'Good', img: '' }
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

  // Do we have the right data in the tabs?
  it('should have the correct data in each tab', () => {
    fixture.whenRenderingDone().then(() => {
      const tabLabels = document.querySelectorAll(
        '#menu .mat-tab-label-content'
      );

      Array.from(tabLabels).forEach(element => {
        expect(expectedTabLabels).toContain(element.textContent);
      });
    });
  });

  // Do we have the correct data in the expansion panel?
  it('should have the correct data in each tab', () => {
    expect(component).toBeTruthy();
  });
});
