import { TestBed } from '@angular/core/testing';

import { TargetSpiesService } from './target.service';

describe('Spies - TargetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TargetSpiesService = TestBed.get(TargetSpiesService);
    expect(service).toBeTruthy();
  });
});
