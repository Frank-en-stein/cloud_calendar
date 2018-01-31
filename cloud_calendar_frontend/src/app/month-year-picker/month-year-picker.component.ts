import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-month-year-picker',
  templateUrl: './month-year-picker.component.html',
  styleUrls: ['./month-year-picker.component.css']
})
export class MonthYearPickerComponent implements OnInit {
    public months_in_year : Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    @Input() current_month : any;
    @Input() current_year : any;
    @Output() update : EventEmitter<any> = new EventEmitter<any>();

    constructor() { }

    ngOnInit() {
    }

    public stepMonth(event, forward) {
        this.current_month = parseInt(this.current_month);
        this.current_year = parseInt(this.current_year);

        if(forward===true) {
            this.current_month+=1;
            if(this.current_month>11) {
                this.current_month=0;
                this.current_year+=1;
            }
        }
        else {
            this.current_month-=1;
            if(this.current_month<0) {
                this.current_month=11;
                this.current_year-=1;
            }
        }
        this.update.emit({current_month: this.current_month, current_year: this.current_year});
    }

    public onNewCalendar(event: any) {
        var mon: number = -1;
        for(var i=0; i<12; i++) {
            if(this.months_in_year[i].toLowerCase()===event.target.value.split("/")[0].toLowerCase()) {
                mon = i;
            }
        }
        var yr: number = parseInt(event.target.value.split("/")[1]);
        if(yr<0 || mon <0 || yr>2999) {
            alert('Please enter a valid month of a valid year');
            return;
        }
        this.current_month = mon;
        this.current_year = yr;

        this.update.emit({current_month: this.current_month, current_year: this.current_year});
    }
}
