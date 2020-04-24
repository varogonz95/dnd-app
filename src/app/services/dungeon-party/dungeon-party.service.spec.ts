import { TestBed } from '@angular/core/testing';

import { DungeonPartyService } from './dungeon-party.service';

describe('DungeonPartyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DungeonPartyService = TestBed.get(DungeonPartyService);
    expect(service).toBeTruthy();
  });
});
