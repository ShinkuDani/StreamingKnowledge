import { TestBed } from '@angular/core/testing';

import { StreamingService } from './streaming_service.service';

describe('StreamingServiceService', () => {
  let service: StreamingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StreamingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
