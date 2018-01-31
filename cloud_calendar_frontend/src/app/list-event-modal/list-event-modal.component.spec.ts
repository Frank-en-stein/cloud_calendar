import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEventModalComponent } from './list-event-modal.component';

describe('ListEventModalComponent', () => {
  let component: ListEventModalComponent;
  let fixture: ComponentFixture<ListEventModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEventModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
