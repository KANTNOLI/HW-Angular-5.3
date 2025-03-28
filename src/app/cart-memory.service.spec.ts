import { TestBed } from '@angular/core/testing';

import { CartMemoryService } from './cart-memory.service';

describe('CartMemoryService', () => {
  let service: CartMemoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartMemoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
