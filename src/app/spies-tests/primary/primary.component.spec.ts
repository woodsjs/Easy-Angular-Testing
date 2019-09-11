import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySpiesComponent } from './primary.component';

describe('PrimaryComponent - Spies', () => {
  let component: PrimarySpiesComponent;
  let fixture: ComponentFixture<PrimarySpiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarySpiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarySpiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
