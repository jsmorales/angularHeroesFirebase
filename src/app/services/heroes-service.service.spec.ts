import { TestBed } from '@angular/core/testing';

import { HeroesServiceService } from './heroes-service.service';

describe('HeroesServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeroesServiceService = TestBed.get(HeroesServiceService);
    expect(service).toBeTruthy();
  });
});
