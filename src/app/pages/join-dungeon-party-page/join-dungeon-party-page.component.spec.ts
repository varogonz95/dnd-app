import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinDungeonPartyPageComponent } from './join-dungeon-party-page.component';

describe('JoinDungeonPartyPageComponent', () => {
  let component: JoinDungeonPartyPageComponent;
  let fixture: ComponentFixture<JoinDungeonPartyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinDungeonPartyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinDungeonPartyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
