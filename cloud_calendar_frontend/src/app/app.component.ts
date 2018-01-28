import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  constructor() {
      for(var i=0; i<this.events.length; i++) this.events[i] = [];

      var date = new Date();
      this.current_date = date.getDate();
      this.current_month = date.getMonth();
      this.current_year = date.getFullYear();
  }
  public onNewCalendar(event) {
      var mon = this.months_in_year.search(new RegExp(event.target.value.split("/")[0], 'i'));
      var yr = event.target.value.split("/")[1];
      if(yr<0 || mon <0 || yr>2999) {
          alert('Please enter a valid month of a valid year');
          return;
      }
      this.current_month = mon;
      this.current_year = yr;

  }
  public width : Number = window.innerWidth;

  public onResize(event) {
      this.width = event.target.innerWidth;
  }
  public onAddEvent(event) {
      this.event_props.index = -1;
      this.event_props.date = event.target.id.split("_")[1];
      this.event_props.name = '';
      this.event_props.description = '';
  }
  public onListEvent(event) {
      this.onAddEvent(event);
  }  
  public onEditEvent(event) {
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
      if(this.event_props.index == -1) {
          this.events[this.event_props.date].push({});
          this.event_props.index = this.events[this.event_props.date].length-1;
      }
      this.events[this.event_props.date][this.event_props.index] = {
          index: this.event_props.index,
          name: this.event_props.name,
          description: this.event_props.description,
          created_date: new Date(),
      };
      this.saveFlag = false;
  }
  public stepMonth(event, forward) {
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
  }
}
