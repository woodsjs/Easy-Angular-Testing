import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule, MatChip } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

import { ButtonToggleUtComponent } from './button-toggle-ut.component';

describe('ButtonToggleUtComponent', () => {
  let component: ButtonToggleUtComponent;
  let fixture: ComponentFixture<ButtonToggleUtComponent>;

  const adultTestData = {
    ageGroup: '19',
    originCountry: ['hispanic', 'black']
  };

  const childTestData = {
    ageGroup: '1',
    legalGuardian: '1',
    originCountry: ['white']
  };

  const adolescentData = {
    ageGroup: '13',
    speakToParents: '0',
    originCountry: ['native']
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonToggleUtComponent],
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
    fixture = TestBed.createComponent(ButtonToggleUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit data for a child when submit pressed', fakeAsync(() => {
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
      buttonToggle =>
        buttonToggle.getAttribute('value') === childTestData.ageGroup
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
      buttonToggle =>
        buttonToggle.getAttribute('value') === childTestData.legalGuardian
    );

    const guardianToggleButton = guardianToggleUnderTest[0].querySelector(
      'button'
    );

    guardianToggleButton.dispatchEvent(new MouseEvent('click'));

    fixture.detectChanges();

    // speakToParents doesn't show up
    const speakToParentsGroupToggle: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      'mat-button-toggle-group#speakToParents'
    );

    // shouldn't exist
    expect(speakToParentsGroupToggle).toBeFalsy();

    // select our origin
    const originGroupToggle: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      'mat-button-toggle-group#originSelection'
    );

    const originButtonToggles = Array.from(
      originGroupToggle.getElementsByTagName('mat-button-toggle')
    );

    const originToggleUnderTest = originButtonToggles.filter(
      buttonToggle =>
        buttonToggle.getAttribute('value') === childTestData.originCountry[0]
    );

    const originToggleButton = originToggleUnderTest[0].querySelector('button');

    originToggleButton.dispatchEvent(new MouseEvent('click'));

    fixture.detectChanges();

    // Submit that baby!
    const button = fixture.debugElement.nativeElement.querySelector(
      'button#submitButton'
    );

    button.dispatchEvent(new MouseEvent('click'));

    fixture.detectChanges();

    expect(component.submitResult).toEqual(childTestData);
  }));

  it('should submit data for a adolescent when submit pressed', () => {
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
      buttonToggle =>
        buttonToggle.getAttribute('value') === adolescentData.ageGroup
    );

    // we have a button instide the mat-button-toggle element, so let's grab one layer deeper
    const ageToggleButton = ageToggleUnderTest[0].querySelector('button');

    ageToggleButton.dispatchEvent(new MouseEvent('click'));

    fixture.detectChanges();

    // since it's a teen person, let's find out if they want us to
    // talk to a parent/guardian
    const speakToParentToggleGroup: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      'mat-button-toggle-group#speakToParents'
    );

    const speakToParentToggles = Array.from(
      speakToParentToggleGroup.getElementsByTagName('mat-button-toggle')
    );

    const speakToParentToggleUnderTest = speakToParentToggles.filter(
      buttonToggle =>
        buttonToggle.getAttribute('value') === adolescentData.speakToParents
    );

    const speakToParentsToggleButton = speakToParentToggleUnderTest[0].querySelector(
      'button'
    );

    speakToParentsToggleButton.dispatchEvent(new MouseEvent('click'));

    fixture.detectChanges();

    // guardian doesn't show up
    const guardianToggle: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      'mat-button-toggle-group#legalGuardian'
    );

    // shouldn't exist
    expect(guardianToggle).toBeFalsy();

    // select our origin
    const originGroupToggle: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      'mat-button-toggle-group#originSelection'
    );

    const originButtonToggles = Array.from(
      originGroupToggle.getElementsByTagName('mat-button-toggle')
    );

    const originToggleUnderTest = originButtonToggles.filter(
      buttonToggle =>
        buttonToggle.getAttribute('value') === adolescentData.originCountry[0]
    );

    const originToggleButton = originToggleUnderTest[0].querySelector('button');

    originToggleButton.dispatchEvent(new MouseEvent('click'));

    fixture.detectChanges();

    // Submit that baby!
    const button = fixture.debugElement.nativeElement.querySelector(
      'button#submitButton'
    );

    button.dispatchEvent(new MouseEvent('click'));

    fixture.detectChanges();

    expect(component.submitResult).toEqual(adolescentData);
  });

  it('should submit data for an adult when submit pressed', () => {
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
      buttonToggle =>
        buttonToggle.getAttribute('value') === adultTestData.ageGroup
    );

    // we have a button instide the mat-button-toggle element, so let's grab one layer deeper
    const ageToggleButton = ageToggleUnderTest[0].querySelector('button');

    ageToggleButton.dispatchEvent(new MouseEvent('click'));

    fixture.detectChanges();

    // No extra toggles
    const speakToParentToggleGroup: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      'mat-button-toggle-group#speakToParents'
    );

    // shouldn't exist
    expect(speakToParentToggleGroup).toBeFalsy();

    // guardian doesn't show up
    const guardianToggle: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      'mat-button-toggle-group#legalGuardian'
    );

    // shouldn't exist
    expect(guardianToggle).toBeFalsy();

    // select our origin
    const originGroupToggle: HTMLElement = fixture.debugElement.nativeElement.querySelector(
      'mat-button-toggle-group#originSelection'
    );

    const originButtonToggles = Array.from(
      originGroupToggle.getElementsByTagName('mat-button-toggle')
    );

    const originTogglesUnderTest = originButtonToggles.filter(
      buttonToggle =>
        adultTestData.originCountry.indexOf(
          buttonToggle.getAttribute('value')
        ) > -1
    );

    for (const buttonToggle of originTogglesUnderTest) {
      const thisButton = buttonToggle.querySelector('button');
      thisButton.dispatchEvent(new MouseEvent('click'));
      fixture.detectChanges();
    }

    // Submit that baby!
    const button = fixture.debugElement.nativeElement.querySelector(
      'button#submitButton'
    );

    button.dispatchEvent(new MouseEvent('click'));

    fixture.detectChanges();

    expect(component.submitResult).toEqual(jasmine.objectContaining({
      ageGroup: adultTestData.ageGroup,
      originCountry: jasmine.arrayContaining(adultTestData.originCountry)
    }));
  });
});
