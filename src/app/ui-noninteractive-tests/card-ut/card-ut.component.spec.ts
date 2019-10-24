import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardUtComponent } from './card-ut.component';

describe('ui-noninteractive - CardUtComponent', () => {
  let component: CardUtComponent;
  let fixture: ComponentFixture<CardUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardUtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
