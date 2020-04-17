import { TestBed } from '@angular/core/testing';

import { ModificaRouteGuardService } from './modifica-route-guard.service';

describe('ModificaRouteGuardService', () => {
  let service: ModificaRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModificaRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
