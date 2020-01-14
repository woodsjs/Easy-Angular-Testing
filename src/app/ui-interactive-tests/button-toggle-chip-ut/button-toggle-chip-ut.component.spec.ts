import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

import { ButtonToggleChipUtComponent } from './button-toggle-chip-ut.component';

describe('ButtonToggleChipUtComponent', () => {
  let component: ButtonToggleChipUtComponent;
  let fixture: ComponentFixture<ButtonToggleChipUtComponent>;

  const adultTestData = {
    ageGroup: '19',
    originCountry: { 0: 'hispanic', 1: 'black' },
    gender: 'male'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonToggleChipUtComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        MatButtonToggleModule,
        MatChipsModule,
        MatButtonModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonToggleChipUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit data for a child when submit pressed', () => {
    // select our age
    const ageGroupToggle: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      'mat-button-toggle-group#ageSelection'
    );

    const ageButtonToggles = Array.from(
      ageGroupToggle.getElementsByTagName('mat-button-toggle')
    );

    // now we're an array, so we can use methods like filter to get the
    // toggle we're interested in
    const ageToggleUnderTest = ageButtonToggles.filter(
      buttonToggle => parseInt(buttonToggle.getAttribute('value'), 10) === 1
    );

    // we have a button instide the mat-button-toggle element, so let's grab one layer deeper
    const ageToggleButton = ageToggleUnderTest[0].querySelector('button');

    ageToggleButton.dispatchEvent(new MouseEvent('click'));

    fixture.detectChanges();

    // since it's a little person, let's find out if their parent/guardian is around
    const guardianGroupToggle: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      'mat-button-toggle-group#legalGuardian'
    );

    const guardianButtonToggles = Array.from(
      guardianGroupToggle.getElementsByTagName('mat-button-toggle')
    );

    const guardianToggleUnderTest = guardianButtonToggles.filter(
      buttonToggle => parseInt(buttonToggle.getAttribute('value'), 10) === 1
    );

    const guardianToggleButton = guardianToggleUnderTest[0].querySelector(
      'button'
    );

    guardianToggleButton.dispatchEvent(new MouseEvent('click'));

    fixture.detectChanges();

    // speakToParents doesn't show up
    // const speakToParentsGroupToggle: HTMLElement = fixture.debugElement.nativeElement.querySelector(
    //   'mat-button-toggle-group#speakToParents'
    // );

    // shouldn't exist
    // expect(speakToParentsGroupToggle).toBefalsy()

    // select our origin
    const originGroupToggle: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      'mat-button-toggle-group#originSelection'
    );

    const originButtonToggles = Array.from(
      originGroupToggle.getElementsByTagName('mat-button-toggle')
    );

    const originToggleUnderTest = originButtonToggles.filter(
      buttonToggle => buttonToggle.getAttribute('value') === 'white'
    );

    const originToggleButton = originToggleUnderTest[0].querySelector('button');

    originToggleButton.dispatchEvent(new MouseEvent('click'));

    fixture.detectChanges();

    // // select the gender
    const genderGroupChipList: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      'div#genderSelection mat-chip-list'
    );

    const genderButtonChipList = Array.from(
      genderGroupChipList.getElementsByTagName('mat-chip')
    );

    const genderChipListUnderTest = genderButtonChipList.filter(
      chipToggle => chipToggle.getAttribute('value') === 'male'
    );

    console.log('chips ', genderChipListUnderTest);
    genderChipListUnderTest[0].dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();

    genderChipListUnderTest[0].dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Spacebar' })
    );

    fixture.detectChanges();
    genderChipListUnderTest[0].dispatchEvent(
      new KeyboardEvent('keyup', { key: 'Spacebar' })
    );

    fixture.detectChanges();
    // Submit that baby!
    const button = fixture.debugElement.nativeElement.querySelector(
      'button#submitButton'
    );

    button.dispatchEvent(new MouseEvent('click'));

    fixture.detectChanges();
  });

  it('should submit data for a adolescent when submit pressed', () => {
    expect(component).toBeTruthy();
  });

  it('should submit data for an adult when submit pressed', () => {
    expect(component).toBeTruthy();
  });

  it('should remove child fields and add adolescent fields when age is changed from 1 to 13', () => {});
});
