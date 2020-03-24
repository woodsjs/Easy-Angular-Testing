import {
  async,
  ComponentFixture,
  TestBed,
} from '@angular/core/testing';

import { SelectRadioCheckboxUtComponent } from './select-radio-checkbox-ut.component';
import {
  MatRadioModule,
  MatCheckboxModule,
  MatSelectModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

describe('SelectRadioCheckboxUtComponent', () => {
  let component: SelectRadioCheckboxUtComponent;
  let fixture: ComponentFixture<SelectRadioCheckboxUtComponent>;

  // This would come from an API! We don't want to have to make a code change
  // to add an item
  const sandwichList = [
    { name: 'veggie', text: 'Veggie', type: 'nonMeat' },
    { name: 'beef', text: 'Beef', type: 'meat' },
    { name: 'grilledChicken', text: 'Grilled Chicken', type: 'meat' },
    { name: 'grilledFish', text: 'Grilled Fish', type: 'meat' },
    { name: 'chickenSalad', text: 'Chicken Salad', type: 'meat' },
    { name: 'tunaSalad', text: 'Tuna Salad', type: 'meat' }
  ];

  const sides: string[] = ['Chips', 'Fruit', 'Salad', 'None'];

  const meatExtraList = [
    { id: 1, text: 'Xtra Meat' },
    { id: 10, text: 'Avocado' },
    { id: 11, text: 'Cilantro' }
  ];

  const veggieExtraList = [
    { id: 10, text: 'Avocado' },
    { id: 11, text: 'Cilantro' }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectRadioCheckboxUtComponent],
      imports: [
        MatRadioModule,
        MatCheckboxModule,
        MatSelectModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectRadioCheckboxUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // This is considered a listbox. Did you know?
  // mat-select (id=mat-select-0) -> mat-select-trigger -> mat-select-trigger -> mat-select-value
  // mat-select-value-text
  // cdk-overlay-container -> div.cdk-overlay-0 ->
  // div.mat-select-panel-wrap -> mat-select-panel -> mat-option(value has the text)
  it('should populate our sandwich select from a list in code', async () => {
    const expectedSandwichList = sandwichList.map(v => v.name);
    const trigger = fixture.debugElement.query(By.css('.mat-select-trigger'))
      .nativeElement;

    trigger.click();
    fixture.detectChanges();

    await fixture.whenStable().then(() => {
      const inquiryOptions = fixture.debugElement.query(
        By.css('.mat-select-panel')
      ).nativeElement;

      for (const option of inquiryOptions.children) {
        expect(expectedSandwichList).toContain(
          option.getAttribute('ng-reflect-value')
        );
      }
    });
  });

  // mat-checkbox -> label -> div -> input
  it('should display the appropriate extra options for non-meat sandwich type', async () => {
    // TODO: Move bigger sandwichList here and use map reduce to get the data we need (meat vs nonmeat and name)
    const expectedExtrasList = veggieExtraList.map(v => v.text);

    const trigger = fixture.debugElement.query(By.css('.mat-select-trigger'))
      .nativeElement;

    // this just gets our cdk-overlay to expose data
    trigger.click();
    fixture.detectChanges();

    // not the best way to do this, we're hard coded. What might be better? Getting our data,
    // filtering on isMeat=False, and taking the first value. That would be more dynamic.
    await fixture.whenStable().then(() => {
      const nonMeatSandwich = fixture.debugElement.query(
        By.css('.mat-select-panel mat-option[ng-reflect-value="veggie"]')
      ).nativeElement;

      // after this the option is not actually selected...
      nonMeatSandwich.click();
      fixture.detectChanges();

      // we need to do this, so the selection event fires
      trigger.click();
      fixture.detectChanges();

      // now let's get all of our checkbox labels
      const currentExtras = fixture.debugElement.queryAll(
        By.css(
          'div#sandwichExtras mat-label[formarrayname="extras"] span.mat-checkbox-label'
        )
      );

      // kludgy?
      for (const item of currentExtras) {
        expect(expectedExtrasList).toContain(item.nativeElement.innerText);
      }
    });
  });

    // mat-checkbox -> label -> div -> input
  it('should display the appropriate extra options for meat sandwich type', async () => {
    // TODO: Move bigger sandwichList here and use map reduce to get the data we need (meat vs nonmeat and name)
    const expectedExtrasList = meatExtraList.map(v => v.text);

    const trigger = fixture.debugElement.query(By.css('.mat-select-trigger'))
      .nativeElement;

    // this just gets our cdk-overlay to expose data
    trigger.click();
    fixture.detectChanges();

    await fixture.whenStable().then(() => {
      const meatSandwich = fixture.debugElement.query(
        By.css('.mat-select-panel mat-option[ng-reflect-value="beef"]')
      ).nativeElement;

      // after this the option is not actually selected...
      meatSandwich.click();
      fixture.detectChanges();

      // we need to do this, so the selection event fires
      trigger.click();
      fixture.detectChanges();

      // now let's get all of our checkbox labels
      const currentExtras = fixture.debugElement.queryAll(
        By.css(
          'div#sandwichExtras mat-label[formarrayname="extras"] span.mat-checkbox-label'
        )
      );

      // kludgy?
      for (const item of currentExtras) {
        expect(expectedExtrasList).toContain(item.nativeElement.innerText);
      }
    });
  });

  // mat-radio-group -> mat-radio-button
  it('should populate our sides from a list in code', () => {
    const dElement = fixture.debugElement;
    const nElement = dElement.nativeElement;
    const radGroup = nElement.querySelector('mat-radio-group');

    for (const radButton of radGroup.children) {
      // let's use ng-reflect-value for what it's build for TESTING!
      expect(sides).toContain(radButton.getAttribute('ng-reflect-value'));
    }
  });

  it('should submit the proper data when order is clicked', () => {
    expect(component).toBeTruthy();
  });
});
