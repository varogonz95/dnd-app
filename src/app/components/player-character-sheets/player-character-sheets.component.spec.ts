import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCharacterSheetsComponent } from './player-character-sheets.component';

describe('PlayerCharacterSheetsComponent', () => {
  let component: PlayerCharacterSheetsComponent;
  let fixture: ComponentFixture<PlayerCharacterSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCharacterSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCharacterSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
