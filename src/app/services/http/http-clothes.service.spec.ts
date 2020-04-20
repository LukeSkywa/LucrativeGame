import { TestBed } from '@angular/core/testing';

import { HttpClothesService } from './http-clothes.service';

describe('HttpClothesService', () => {
  let service: HttpClothesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClothesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
