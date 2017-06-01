import { TestBed, inject } from '@angular/core/testing';

import { DataFetchingService } from './data-fetching.service';

describe('DataFetchingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataFetchingService]
    });
  });

  it('should be created', inject([DataFetchingService], (service: DataFetchingService) => {
    expect(service).toBeTruthy();
  }));
});
