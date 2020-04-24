import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DumpDataComponent } from './dump-data.component';

describe('DumpDataComponent', () => {
  let component: DumpDataComponent;
  let fixture: ComponentFixture<DumpDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DumpDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DumpDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
