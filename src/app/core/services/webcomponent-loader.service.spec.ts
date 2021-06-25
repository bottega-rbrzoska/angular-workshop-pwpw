import { TestBed } from '@angular/core/testing';

import { WebcomponentLoaderService } from './webcomponent-loader.service';

describe('WebcomponentLoaderService', () => {
  let service: WebcomponentLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebcomponentLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
