import { TestBed } from '@angular/core/testing';

import { BookNameService } from './book-name.service';

describe('BookNameService', () => {
  let service: BookNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
