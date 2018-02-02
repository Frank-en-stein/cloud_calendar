import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-edit-event-modal',
  templateUrl: './add-edit-event-modal.component.html',
  styleUrls: ['./add-edit-event-modal.component.css']
})
export class AddEditEventModalComponent implements OnInit {
  public months_in_year : any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  @Input() current_month : number;
  @Input() current_year : number;
  @Input() events : any;
  @Input() event_props : any;
  @Input() saveButtonState : boolean;
  @Input() saveFlag : boolean;
  @Input() host : string;
  @Output() saveButtonStateUpdate : EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() saveFlagUpdate : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  public onSaveEvent(event) {
    if(this.event_props.name=='') {
      this.saveFlagUpdate.emit(true);
      return;
    }
    var ev_obj = {
      date: this.event_props.date,
      month: this.current_month,
      year: this.current_year,
      name: this.event_props.name,
      description: this.event_props.description,
      created_date: new Date()
    };
    if(this.event_props.index == -1) {
      this.http.put(this.host + '/event', ev_obj).subscribe();
    }
    else {
      ev_obj["_id"] = this.event_props.index;
      this.http.post(this.host + '/event', ev_obj).subscribe();
    }

    this.saveFlagUpdate.emit(true);
    this.saveButtonStateUpdate.emit(true);
  }
  public onDeleteEvent(event) {
    this.http.post(this.host + '/delete_event', this.events[this.event_props.date][this.event_props.index]).subscribe();
  }
}
