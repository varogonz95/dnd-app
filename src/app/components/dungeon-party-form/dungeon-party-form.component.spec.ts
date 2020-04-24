import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonPartyFormComponent } from './dungeon-party-form.component';

describe('DungeonPartyFormComponent', () => {
  let component: DungeonPartyFormComponent;
  let fixture: ComponentFixture<DungeonPartyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DungeonPartyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DungeonPartyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
