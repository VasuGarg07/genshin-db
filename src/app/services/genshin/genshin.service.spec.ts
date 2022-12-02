import { TestBed } from '@angular/core/testing';

import { GenshinService } from './genshin.service';

describe('GenshinService', () => {
  let service: GenshinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenshinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
