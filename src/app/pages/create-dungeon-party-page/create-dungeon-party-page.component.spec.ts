import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDungeonPartyPageComponent } from './create-dungeon-party-page.component';

describe('CreateDungeonPartyPageComponent', () => {
  let component: CreateDungeonPartyPageComponent;
  let fixture: ComponentFixture<CreateDungeonPartyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDungeonPartyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDungeonPartyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
