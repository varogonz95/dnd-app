import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterSheetPage } from './create-character-sheet.component';

describe('CreateCharacterSheetComponent', () => {
  let component: CreateCharacterSheetPage;
  let fixture: ComponentFixture<CreateCharacterSheetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCharacterSheetPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCharacterSheetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
