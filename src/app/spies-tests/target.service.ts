import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TargetSpiesService {
  private pickles = [
    { type: 'dill', taste: 'tart', smell: 'vinager' },
    { type: 'bread and butter', taste: 'sugary', smell: 'bread' }
  ];

  private picklesUpdated = new Subject< {} >();

  constructor() {}

  public getPickleUpdateListener() {
    return this.picklesUpdated.asObservable();
  }

  public allPickles() {
    return this.pickles.slice();
  }

  picklesByTaste(taste) {
    return this.pickles.filter(p => p.taste === taste);
  }

  picklesBySmell(smell) {
    return this.pickles.filter(p => p.smell === smell);
  }

  addPickle( pickle ) {
    this.pickles.push( pickle );
    this.picklesUpdated.next(this.allPickles());
  }
}
