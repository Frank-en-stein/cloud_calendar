import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-event-modal',
  templateUrl: './list-event-modal.component.html',
  styleUrls: ['./list-event-modal.component.css']
})
export class ListEventModalComponent implements OnInit {
  public months_in_year : Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  @Input() current_month : number;
  @Input() current_year : number;
  @Input() event_props : any;
  @Input() events : any;
  @Output() update : EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  public onEditEvent(event) {
    this.update.emit(event);
  }

  daily_event_keys(date) {
    return Object.keys(this.events[date]);
  }
}
