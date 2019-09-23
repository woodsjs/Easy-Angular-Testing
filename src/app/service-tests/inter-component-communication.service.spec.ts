import { TestBed } from '@angular/core/testing';

import { InterComponentCommunicationService } from './inter-component-communication.service';

describe('InterComponentCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterComponentCommunicationService = TestBed.get(InterComponentCommunicationService);
    expect(service).toBeTruthy();
  });
});
