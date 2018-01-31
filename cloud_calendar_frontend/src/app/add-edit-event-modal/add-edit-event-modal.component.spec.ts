import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEventModalComponent } from './add-edit-event-modal.component';

describe('AddEditEventModalComponent', () => {
  let component: AddEditEventModalComponent;
  let fixture: ComponentFixture<AddEditEventModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditEventModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
