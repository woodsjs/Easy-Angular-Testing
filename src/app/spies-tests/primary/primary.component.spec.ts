import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySpiesComponent } from './primary.component';
import { TargetSpiesService } from '../target.service';

// so we can return our observable normally given by the service
import { of } from 'rxjs';

// don't care about our secondary (nested) component right now
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('Spies - PrimaryComponent', () => {
  let component: PrimarySpiesComponent;
  let fixture: ComponentFixture<PrimarySpiesComponent>;

  // This will be called later, to double and spy on the existing service methods
  let targetServiceSpy: jasmine.SpyObj<TargetSpiesService>;

  // Will be used later to stub in values returned by our service
  let updateListenerMethodSpy;
  let allPicklesMethodSpy;

  const picklesStub = [
    { type: 'stubOne', taste: 'stubOne Taste', smell: 'stubOne Smell' },
    { type: 'stubTwo', taste: 'stubTwo Taste', smell: 'stubTwo Smell' }
  ];

  beforeEach(async(() => {
    // ok, let's create our service spy, and fake any method we need
    const spy = jasmine.createSpyObj('TargetSpiesService', [
      'allPickles',
      'getPickleUpdateListener'
    ]);

    // Now to create a mock for any fake method that needs to return a value
    // if anything calls the getPickleUpdateListener method, return our stubbed pickles
    updateListenerMethodSpy = spy.getPickleUpdateListener.and.returnValue(
      of(picklesStub)
    );
    // console.log('******', updateListenerMethodSpy);

    // and do the same for the allPickles method,
    // but we should not return an observable, just the value
    allPicklesMethodSpy = spy.allPickles.and.returnValue(picklesStub);

    TestBed.configureTestingModule({
      declarations: [PrimarySpiesComponent],
      providers: [{ provide: TargetSpiesService, useValue: spy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarySpiesComponent);
    component = fixture.componentInstance;

    // this is where we create a replacment for service with our spy
    // so we can use it later for tests.  In useValue in the provider above
    // we've asked for the value of spy instead of the TargetSpiesService
    // if you console.log targetServiceSpy you'll see the spyStrategy of any methods
    // faked above in the spy const
    targetServiceSpy = TestBed.get(TargetSpiesService);
    // see?
    // console.log('************', targetServiceSpy);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call #getPickleUpdateListener exactly once', () => {
    expect(updateListenerMethodSpy.calls.count()).toEqual(1);
  });

  it('should call #getPickleUpdateListener', () => {
    // calls.any tracks whether this spy was called
    expect(updateListenerMethodSpy.calls.any()).toBe(
      true,
      'getPickleServiceSpy called'
    );
  });

  it('should call #allPickles exactly once', () => {
    expect(targetServiceSpy.allPickles.calls.count()).toEqual(1);
  });

  it('should call #allPickles to return stubbed values from spy', () => {
    // making sure it's organically called
    // it will also give us our stubbed values, since we added the 
    // spy to returnValue in the before each above
    expect(targetServiceSpy.allPickles).toHaveBeenCalled();

    // let's be sure the values weren't mutated along the way
    // we shouldn't really do it this way, but we'll fix this
    expect(targetServiceSpy.allPickles()).toEqual(picklesStub);
  });
});
