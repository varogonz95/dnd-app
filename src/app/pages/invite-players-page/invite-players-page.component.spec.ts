import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitePlayersPageComponent } from './invite-players-page.component';

describe('InvitePlayersPageComponent', () => {
  let component: InvitePlayersPageComponent;
  let fixture: ComponentFixture<InvitePlayersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitePlayersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitePlayersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
