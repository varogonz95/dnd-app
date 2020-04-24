import { TestBed } from '@angular/core/testing';

import { CharacterSheetService } from './character-sheet.service';

describe('CharacterSheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterSheetService = TestBed.get(CharacterSheetService);
    expect(service).toBeTruthy();
  });
});
