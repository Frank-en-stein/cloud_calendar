import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CellBodyComponent } from './cell-body.component';

describe('CellBodyComponent', () => {
  let component: CellBodyComponent;
  let fixture: ComponentFixture<CellBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CellBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
