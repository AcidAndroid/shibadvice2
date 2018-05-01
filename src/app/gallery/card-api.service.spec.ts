import { TestBed, inject } from '@angular/core/testing';

import { CardApiService } from './card-api.service';

describe('CardApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardApiService]
    });
  });

  it('should be created', inject([CardApiService], (service: CardApiService) => {
    expect(service).toBeTruthy();
  }));
});
