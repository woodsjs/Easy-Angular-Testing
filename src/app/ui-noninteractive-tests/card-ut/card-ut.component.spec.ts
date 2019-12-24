import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { CardUtComponent } from './card-ut.component';
import { when } from 'q';

describe('ui-noninteractive - CardUtComponent', () => {
  let component: CardUtComponent;
  let fixture: ComponentFixture<CardUtComponent>;

  const testData = [
    {
      img: '../../../assets/images/gray-foods-on-wicker-baskets.png',
      title: 'Little Boulangerie',
      subtitle: 'Bread and Baked Goods',
      content: 'Little home bakery specializing in breads and sweet treats.'
    },
    {
      img: '../../../assets/images/gray-foods-on-wicker-baskets.png',
      avatar: '../../../assets/images/face.jpg',
      title: 'Stucky Jim',
      subtitle: 'Available',
      content:
        'Sitting at Little Boulangerie having an espresso and some pain au chocolate!'
    },
    {
      img: '../../../assets/images/gray-foods-on-wicker-baskets.png',
      avatar: '../../../assets/images/face.jpg',
      title: 'Stucky Jim',
      subtitle: 'Offline',
      content: 'What an experience!'
    }
  ];

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

  // we're not testing instantiating a card. That would typically be an ngfor in our
  // html. We don't need to do the ugliness of building dom elements and injecting them.
  // This is Angular!

  // Why are we doing this test?  While writing the tests, this one kept failing
  // I couldn't find any issue with the data.  While debugging,
  // I found there was a space being injected somewhere in one of the
  // content elements. Turns out, in our HTML, I had an errant space!
  // THAT's why we test!
  it('should create cards with proper title, subtitle, and content', () => {
    // get our mat cards and find one that has the test info we expect

    const ourDomCardsUnderTest = Array.from(
      document.getElementsByTagName('mat-card')
    );

    ourDomCardsUnderTest.forEach(card => {
      const cardTitle = card.getElementsByTagName('mat-card-title')[0]
        .textContent;
      const cardSubtitle = card.getElementsByTagName('mat-card-subtitle')[0]
        .textContent;
      const cardContent = card.getElementsByTagName('mat-card-content')[0]
        .textContent;

      // check if the anmials are in our final list. Create our object with the data above
      // and use jasmine.objectContaining
      expect(testData).toContain(
        jasmine.objectContaining({
          title: cardTitle,
          subtitle: cardSubtitle,
          content: cardContent
        })
      );
    });
  });

  it('should make a reservation when the make reservation button is pressed', () => {
    const theSpy = spyOn(component, 'makeReservation');

    // same at it always is
    const ourDomCardUnderTest = document.querySelector('mat-card.business');
    // we'd probs put some class on this button to find it easier
    // and we grab the first one
    const buttonUnderTest = ourDomCardUnderTest.getElementsByTagName(
      'button'
    )[0];

    buttonUnderTest.click();
    fixture.detectChanges();

    // we don't need deeper testing than this. If the button click triggers
    // the right method, the rest of the work should be done and tested by the
    // service that makes the reservation
    expect(theSpy).toHaveBeenCalled();
  });

  it('should message the user when the send message button is pressed', () => {
    // so similar to the above
    const theSpy = spyOn(component, 'messageUser');

    // same at it always is
    // Unlike the above test, we'll have multiple
    // users. Need one that's online.
    const ourDomCardUnderTest = document.querySelector('mat-card.user.online');
    // we'd probs put some class on this button to find it easier
    // and we grab the first one.
    const buttonUnderTest = ourDomCardUnderTest.getElementsByTagName(
      'button'
    )[0];

    buttonUnderTest.click();
    fixture.detectChanges();

    // we don't need deeper testing than this. If the button click triggers
    // the right method, the rest of the work should be done and tested by the
    // service that makes the reservation
    expect(theSpy).toHaveBeenCalled();
  });

  it('should disable the message button when status moves to offline', () => {
    // so similar to the above
    const theSpy = spyOn(component, 'messageUser');

    // same at it always is
    // Unlike the above test, we'll have multiple
    // users. Need one that's offline.
    const ourDomCardUnderTest = document.querySelector('mat-card.user.offline');
    // we'd probs put some class on this button to find it easier
    // and we grab the first one.
    const buttonUnderTest = ourDomCardUnderTest.getElementsByTagName(
      'button'
    )[0];

    buttonUnderTest.click();
    fixture.detectChanges();

    expect(theSpy).not.toHaveBeenCalled();
  });
});
