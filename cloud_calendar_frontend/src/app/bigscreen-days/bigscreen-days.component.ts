import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bigscreen-days',
  templateUrl: './bigscreen-days.component.html',
  styleUrls: ['./bigscreen-days.component.css']
})
export class BigscreenDaysComponent implements OnInit {
  public days_in_week : any = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  @Input() width : number;

  constructor() { }

  ngOnInit() {
  }

}
