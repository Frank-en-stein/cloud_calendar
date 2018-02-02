import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-smallscreen-days',
  templateUrl: './smallscreen-days.component.html',
  styleUrls: ['./smallscreen-days.component.css']
})
export class SmallscreenDaysComponent implements OnInit {
  public days_in_week : any = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  @Input() current_date : number;
  @Input() date : number;
  @Input() width : number;
  @Input() weekday : number;

  constructor() { }

  ngOnInit() {
  }

}
