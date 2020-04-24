import { TestBed } from '@angular/core/testing';

import { CharacterSheetResolver } from './character-sheet.resolver';

describe('CharacterSheetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CharacterSheetResolver = TestBed.get(CharacterSheetResolver);
    expect(service).toBeTruthy();
  });
});
