import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRouteTestCompComponent } from './activatedroute-test';

// These are added for our ActivatedRoute test
import { ActivatedRouteStub } from '../testing/activated-route-stub';
import { ActivatedRoute } from '@angular/router';

describe('ActivatedRouteTestCompComponent', () => {
  let component: ActivatedRouteTestCompComponent;
  let fixture: ComponentFixture<ActivatedRouteTestCompComponent>;

  // This was added for our ActivatedRoute test
  let activatedRoute: ActivatedRouteStub;

  beforeEach(async(() => {
    // This was added for our ActivatedRoute test
    activatedRoute = new ActivatedRouteStub({ this: 'that' });

    TestBed.configureTestingModule({
      declarations: [ActivatedRouteTestCompComponent],
      // This was added for our ActivatedRoute test
      // Notice how it uses the "value" from activatedRoute. If you console.log this
      // you'll see that it's an observable.
      providers: [{ provide: ActivatedRoute, useValue: activatedRoute }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivatedRouteTestCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Showing what we have in activatedRoute now
    // along with subscribing to our paramMap and printing it. If you
    // do this in the test-comp.component's ngOnInit, you'll see the same
    // info.  In this case a paramMap with a params node { this: 'that' }
    console.log(activatedRoute);
    activatedRoute.paramMap.subscribe(paramMap => console.log(paramMap));
    expect(component).toBeTruthy();
  });
});
