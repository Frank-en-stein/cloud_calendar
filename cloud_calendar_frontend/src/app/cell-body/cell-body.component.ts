import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cell-body',
  templateUrl: './cell-body.component.html',
  styleUrls: ['./cell-body.component.css']
})
export class CellBodyComponent implements OnInit {
  @Input() daily_events : any;
  @Input() date : number;
  
  @Output() handle_click : EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  daily_event_keys() {
    return Object.keys(this.daily_events);
  }

}
