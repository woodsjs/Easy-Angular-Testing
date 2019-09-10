import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionalityComponent } from './functionality.component';

// we can use this to get rid of errors before we stub
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ToBeStubbedStubComponent } from '../testing/tobestubbed-stub';

describe('ComponentStubTest-FunctionalityComponent', () => {
  let component: FunctionalityComponent;
  let fixture: ComponentFixture<FunctionalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FunctionalityComponent, ToBeStubbedStubComponent ],
      // we can use this to get rid of errors before we stub
      // goes along with the NO_ERRORS_SCHEMA import
      // schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
