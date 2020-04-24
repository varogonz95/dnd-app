import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarOutletComponent } from './progress-bar-outlet.component';

describe('ProgressBarOutletComponent', () => {
  let component: ProgressBarOutletComponent;
  let fixture: ComponentFixture<ProgressBarOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
