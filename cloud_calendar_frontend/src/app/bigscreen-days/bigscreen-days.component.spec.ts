import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigscreenDaysComponent } from './bigscreen-days.component';

describe('BigscreenDaysComponent', () => {
  let component: BigscreenDaysComponent;
  let fixture: ComponentFixture<BigscreenDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigscreenDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigscreenDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
