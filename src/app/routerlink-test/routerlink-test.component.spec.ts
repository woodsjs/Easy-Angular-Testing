import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterlinkTestComponent } from './routerlink-test.component';

// This is added for our RouterLink test
import { RouterLinkDirectiveStub } from '../testing/router-link-stub.directive';

describe('RouterlinkTestComponent', () => {
  let component: RouterlinkTestComponent;
  let fixture: ComponentFixture<RouterlinkTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // RouterLinkDirectiveStub is added for our RouterLink test
      declarations: [ RouterlinkTestComponent, RouterLinkDirectiveStub ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterlinkTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log(RouterLinkDirectiveStub);
    expect(component).toBeTruthy();
  });
});
