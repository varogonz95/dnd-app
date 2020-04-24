import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetFormHeaderComponent } from './character-sheet-form-header.component';

describe('CharacterSheetFormHeaderComponent', () => {
  let component: CharacterSheetFormHeaderComponent;
  let fixture: ComponentFixture<CharacterSheetFormHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSheetFormHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetFormHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
