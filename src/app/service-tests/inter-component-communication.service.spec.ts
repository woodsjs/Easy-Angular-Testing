import { TestBed } from '@angular/core/testing';

import { InterComponentCommunicationService } from './inter-component-communication.service';

describe('Service Tests - InterComponentCommunicationService', () => {
  let service: InterComponentCommunicationService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(InterComponentCommunicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should let us know the cupcake is done after ordering', () => {
    const cupcakeIsDone = service.orderCupcake('chocolate', 'whipped cream');
    let resultToTest;

    // notice we're not doing the expect in the subscribe block. Go ahead and 
    // comment out the assignment of result to result to test,
    // and uncomment the expect and console.log.
    // After you run the tests and see you get the expected result,
    // comment out the call to service.announceCompletionOfCupcake.
    // What happens?
    // You do NOT see the console.log in the subscribe block called,
    // which means you never received a result from the observable.
    // but your test still passes!
    cupcakeIsDone.subscribe(result => {
      resultToTest = result;
      // expect(result).toBeTruthy();
      // console.log(result);
    });
    service.announceCompletionOfCupcake();
    expect(resultToTest).toBeTruthy();
  });

  it('should return the cupcake when it is being delivered', () => {
    const cupcakeIsDelivered = service.announceCompletionOfCupcake();
    let resultToTest;

    cupcakeIsDelivered.subscribe(result => {
      resultToTest = result;
      // console.log(resultToTest);
    });
    service.deliverCupcake();
    // here's a better way to do this
    expect(resultToTest).toEqual({ filling: 'none', frosting: 'vanilla' });
  });

  it('should return our ordered cupcake when all is done', () => {
    let cupcakeIsDone;
    let cupcakeIsDelivered;
    let resultToTest;

    const cupcake = {frosting: 'Chocolate', filling: 'Strawberry'};

    cupcakeIsDone = service.orderCupcake(cupcake.frosting, cupcake.filling);

    cupcakeIsDone.subscribe(result => result);
    cupcakeIsDelivered = service.announceCompletionOfCupcake();

    cupcakeIsDelivered.subscribe(result => resultToTest = result);
    service.deliverCupcake();

    expect(resultToTest).toEqual(cupcake);
  });
});
