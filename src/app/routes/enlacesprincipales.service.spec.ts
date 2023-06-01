import { TestBed } from '@angular/core/testing';

import { EnlacesprincipalesService } from './enlacesprincipales.service';

describe('EnlacesprincipalesService', () => {
  let service: EnlacesprincipalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnlacesprincipalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
