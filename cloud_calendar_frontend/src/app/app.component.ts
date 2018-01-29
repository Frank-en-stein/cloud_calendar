import {Component} from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public host : string = 'http://localhost:3000';
  public current_date : number=1;
  public event_props : any = {
      index: -1,
      date: 1,
      name: '',
      description: ''
  };
  public current_month : number=0;
  public current_year : number=2018;
  public months_in_year : any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public days_in_week : any = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  public events : any = new Array(32);
  public calendar : any =
   [ [  0,  1,  2,  3,  4,  5,  6 ],
     [  7,  8,  9, 10, 11, 12, 13 ],
     [ 14, 15, 16, 17, 18, 19, 20 ],
     [ 21, 22, 23, 24, 25, 26, 27 ],
     [ 28, 29, 30, 31,  0,  0,  0 ] ];
  public saveFlag : boolean = false;
  public width : Number = window.innerWidth;
  public saveButtonState : boolean = false;  

  constructor(private http: HttpClient) {
      for(var i=0; i<this.events.length; i++) this.events[i] = [];

      var date = new Date();
      this.current_date = date.getDate();
      this.current_month = 5;//date.getMonth();
      this.current_year = date.getFullYear();

      this.drawCalendar();
  }
  public onNewCalendar(event) {
      var mon = -1;
      for(var i=0; i<12; i++) {
          if(this.months_in_year[i].toLowerCase()===event.target.value.split("/")[0].toLowerCase()) {
              mon = i;
          }
      }
      var yr = event.target.value.split("/")[1];
      if(yr<0 || mon <0 || yr>2999) {
          alert('Please enter a valid month of a valid year');
          return;
      }
      this.current_month = mon;
      this.current_year = yr;
      this.drawCalendar();
  }
  public drawCalendar() {
      this.http.get(this.host + '/events/' + this.current_month + '/' + this.current_year).subscribe((data)=> {
          for(var i=0; i<this.events.length; i++) this.events[i] = [];
          this.calendar = data.calendar;
          data.events.forEach((ev)=>{
              if(ev.date>0 && ev.date<32) {
                  this.events[ev.date].push(ev);
              }
          });
      });
  }

  public onResize(event) {
      this.width = event.target.innerWidth;
  }
  public onAddEvent(event) {
      this.event_props.index = -1;
      this.event_props.date = event.target.id.split("_")[1];
      this.event_props.name = '';
      this.event_props.description = '';
      
      this.saveButtonState = false;
  }
  public onListEvent(event) {
      this.onAddEvent(event);
  }  
  public onEditEvent(event) {
      this.saveButtonState = false;
      
      this.event_props.index = event.target.id.split("_")[2];
      this.event_props.date = event.target.id.split("_")[1];
      this.event_props.name = this.events[this.event_props.date][this.event_props.index].name;
      this.event_props.description = this.events[this.event_props.date][this.event_props.index].description;
  }
  public onSaveEvent(event) {
      if(this.event_props.name=='') {
          this.saveFlag = true;
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
          this.http.put(this.host + '/event', ev_obj).subscribe((data)=>this.events[this.event_props.date].push(data));
          this.event_props.index = this.events[this.event_props.date].length-1;
      }
      else {
          ev_obj["_id"] = this.events[this.event_props.date][this.event_props.index]._id;
          this.http.post(this.host + '/event', ev_obj).subscribe((data)=>
              this.events[this.event_props.date][this.event_props.index] = data);
      }

      this.saveFlag = false;
      this.saveButtonState = true;
  }
  public onDeleteEvent(event) {
      this.http.post(this.host + '/delete_event', this.events[this.event_props.date][this.event_props.index]).subscribe((data)=>{
          this.events[this.event_props.date].splice(this.event_props.index, 1);
      });
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
      this.drawCalendar();
  }
  public isToday(date) {
      var d = new Date();
      return date==d.getDate() && this.current_month==d.getMonth() && this.current_year==d.getFullYear()
  }
}
