import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service
export class InterComponentCommunicationService {
  private cupcake = { filling: 'none', frosting: 'vanilla' };

  // Observables
  private cupcakeIsDoneSource = new Subject<boolean>();
  private cupcakeDeliverySource = new Subject<{
    filling: string;
    frosting: string;
  }>();

  // Observable string streams
  // let folks know their cupcake is done and will be on the way
  cupcakeIsDone$ = this.cupcakeIsDoneSource.asObservable();

  // Give the people their cake!
  cupcakeDelivery$ = this.cupcakeDeliverySource.asObservable();

  constructor() {}

  orderCupcake(frosting: string, filling: string): Observable<any> {
    this.cupcake = { frosting, filling };
    return this.cupcakeIsDone$;
  }

  announceCompletionOfCupcake() {
    this.cupcakeIsDoneSource.next(true);
    return this.cupcakeDelivery$;
  }

  deliverCupcake() {
    this.cupcakeDeliverySource.next(this.cupcake);
  }
}
