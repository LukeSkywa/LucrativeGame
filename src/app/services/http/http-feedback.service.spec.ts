import { TestBed } from '@angular/core/testing';

import { HttpFeedbackService } from './http-feedback.service';

describe('HttpFeedbackService', () => {
  let service: HttpFeedbackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpFeedbackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
