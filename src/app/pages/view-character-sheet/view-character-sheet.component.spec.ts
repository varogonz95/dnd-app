import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCharacterSheetPage } from './view-character-sheet.component';

describe('ViewCharacterSheetComponent', () => {
  let component: ViewCharacterSheetPage;
  let fixture: ComponentFixture<ViewCharacterSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCharacterSheetPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCharacterSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
