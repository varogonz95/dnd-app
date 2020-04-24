import { TestBed } from '@angular/core/testing';

import { FileToBase64Service } from './file-to-base64.service';

describe('FileToBase64Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileToBase64Service = TestBed.get(FileToBase64Service);
    expect(service).toBeTruthy();
  });
});
