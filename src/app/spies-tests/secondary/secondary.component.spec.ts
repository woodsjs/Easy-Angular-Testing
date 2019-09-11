import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySpiesComponent } from './secondary.component';

describe('SecondaryComponent - Spies', () => {
  let component: SecondarySpiesComponent;
  let fixture: ComponentFixture<SecondarySpiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondarySpiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondarySpiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
