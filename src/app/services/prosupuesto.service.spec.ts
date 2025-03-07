import { TestBed } from '@angular/core/testing';

import { ProsupuestoService } from './prosupuesto.service';

describe('ProsupuestoService', () => {
  let service: ProsupuestoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProsupuestoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
