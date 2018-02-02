import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallscreenDaysComponent } from './smallscreen-days.component';

describe('SmallscreenDaysComponent', () => {
  let component: SmallscreenDaysComponent;
  let fixture: ComponentFixture<SmallscreenDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallscreenDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallscreenDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
