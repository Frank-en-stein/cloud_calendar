import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cell-header',
  templateUrl: './cell-header.component.html',
  styleUrls: ['./cell-header.component.css']
})
export class CellHeaderComponent implements OnInit {
  @Input() date : number;
  @Input() events : any;
  @Input() current_month : number;
  @Input() current_year : number;
  @Input() width : number;
  @Output() init_modal : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  public isToday(date) {
    var d = new Date();
    return date==d.getDate() && this.current_month==d.getMonth() && this.current_year==d.getFullYear()
  }

  daily_event_keys() {
    return Object.keys(this.events[this.date]);
  }

}
