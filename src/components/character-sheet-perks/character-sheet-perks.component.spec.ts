import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetPerksComponent } from './character-sheet-perks.component';

describe('CharacterSheetPerksComponent', () => {
  let component: CharacterSheetPerksComponent;
  let fixture: ComponentFixture<CharacterSheetPerksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSheetPerksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetPerksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
