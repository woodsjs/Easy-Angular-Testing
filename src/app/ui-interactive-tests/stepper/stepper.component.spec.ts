import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatSelectModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StepperComponent } from './stepper.component';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  const expectedItemsInCart = [
    { name: 'Become a SuperHero Coder', author: 'Ja, Nin', cost: 1000.0 },
    {
      name: 'Learn Angular in 24 Seconds',
      author: 'Codesalot, Suzy',
      cost: 4242.0
    },
    {
      name: 'The Perils of Imposter Syndrome',
      author: 'Itsok, Dr. Stephen',
      cost: 1.0
    }
  ];

  const expectedNumberOfSteps = 5;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepperComponent],
      imports: [
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCardModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // mat-horizontal-stepper-content are our panels, there will be as many as there are steps
  it('should show the proper number of stepper containers as there are steps', () => {
    const numberOfSteps = document.getElementsByClassName(
      'mat-horizontal-stepper-content'
    );

    expect(numberOfSteps.length).toEqual(expectedNumberOfSteps);
  });

  // this has a bunch of mat-cards. So grab and verify that data.
  it('should show the proper items on the first step', () => {
    const stepContent = document.getElementsByClassName(
      'mat-horizontal-stepper-content'
    );

    const stepOneContent = stepContent[0].children;

    //   <mat-card-header>
    //     <mat-card-title>{{ item.name }}</mat-card-title>
    //     <mat-card-subtitle>
    //       Author: {{ item.author }}
    //       <br />
    //       Cost: ${{ item.cost.toFixed(2) }}
    //     </mat-card-subtitle>
    //   </mat-card-header>

    // we only want our mat-card stuff, not the buttons;
    // and we can test as deep as we want, here we're only checking that each
    // item's title is there
    Array.from(stepOneContent).forEach(element => {
      if (element.nodeName === 'MAT-CARD') {
        const cardTitle = element.getElementsByTagName('mat-card-title')[0]
          .textContent;
        const cardSubtitle = element.getElementsByTagName(
          'mat-card-subtitle'
        )[0].textContent;

        expect(expectedItemsInCart).toContain(
          jasmine.objectContaining({
            name: cardTitle.trim()
          })
        );
      }
    });
  });

  // We're not going to check the form is built correctly, though we would here.
  // It all depends on where the content is coming from. If it's a component brought in,
  // we would test the form in its own component
  it('should show the correct form on the second step', () => {
    const stepContent = document.getElementsByClassName(
      'mat-horizontal-stepper-content'
    );

    const stepTwoContent = stepContent[1].children;

    // we'll make sure a form is shown
    expect(stepTwoContent[0].nodeName).toEqual('FORM');

    // we'll makd sure it has the right id
    expect(stepTwoContent[0].id).toEqual('addressForm');
  });

  it('should call processStepperData when the user accepts what is on the next to last tab', () => {
    // we would set up some utility functions that would do our filling and moving
    // between tabs. Here we'll do it in one place.

    const spy = spyOn(component, 'processStepperData');

    const stepContent = document.getElementsByClassName(
      'mat-horizontal-stepper-content'
    );

    const stepOneButton = stepContent[0].getElementsByTagName('button');
    // there's only one so just go with it
    stepOneButton[0].dispatchEvent(new MouseEvent('click'));
    fixture.detectChanges();

    // we could fill out data here to test the flow, but we won't
    // if we did, we wouldn't get the buttons up front.
    const stepTwoContent = stepContent[1].getElementsByTagName('button');
    Array.from(stepTwoContent).forEach(button => {
      if (button.type === 'submit') {
        button.dispatchEvent(new MouseEvent('click'));
      }
    });
    fixture.detectChanges();

    const stepThreeContent = stepContent[2].getElementsByTagName('button');
    Array.from(stepThreeContent).forEach(button => {
      if (button.type === 'submit') {
        button.dispatchEvent(new MouseEvent('click'));
      }
    });
    fixture.detectChanges();

    const stepFourContent = stepContent[3].getElementsByTagName('button');
    Array.from(stepFourContent).forEach(button => {
      if (button.type === 'submit') {
        button.dispatchEvent(new MouseEvent('click'));
      }
    });

    // now we'd check that our last method was called
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });
});
