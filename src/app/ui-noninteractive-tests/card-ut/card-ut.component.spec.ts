import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { CardUtComponent } from './card-ut.component';

describe('ui-noninteractive - CardUtComponent', () => {
  let component: CardUtComponent;
  let fixture: ComponentFixture<CardUtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardUtComponent],
      imports: [MatCardModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardUtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a card with location name, type of eatery, image and description', () => {});

  it('should make a reservation when the make reservation button is pressed', () => {});

  it('should create a card with avatar, name, status, image and description', () => {});

  it('should message the user when the send message button is pressed', () => {});

  it('should disable the message button when status moves to offline', () => {});

  it('should create a card with avatar, name, status, image and description', () => {});
});
