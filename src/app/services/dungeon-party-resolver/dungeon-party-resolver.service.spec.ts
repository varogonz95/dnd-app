import { TestBed } from '@angular/core/testing';

import { DungeonPartyResolverService } from './dungeon-party-resolver.service';

describe('DungeonPartyResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DungeonPartyResolverService = TestBed.get(DungeonPartyResolverService);
    expect(service).toBeTruthy();
  });
});
