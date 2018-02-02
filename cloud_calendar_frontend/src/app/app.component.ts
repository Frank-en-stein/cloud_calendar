import {Component, OnInit} from "@angular/core";
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public host : string = 'http://localhost:3000';
  public socket: any;
  public current_date : number=1;
  public event_props : any = {
      index: -1,
      date: 1,
      name: '',
      description: ''
  };
  public current_month : any = 0;
  public current_year : any = 2018;
  public months_in_year : any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public events : any = new Array(32);
  public calendar : any =
   [ [  0,  1,  2,  3,  4,  5,  6 ],
     [  7,  8,  9, 10, 11, 12, 13 ],
     [ 14, 15, 16, 17, 18, 19, 20 ],
     [ 21, 22, 23, 24, 25, 26, 27 ],
     [ 28, 29, 30, 31,  0,  0,  0 ] ];
  public width : Number = window.innerWidth;
    
  public saveFlag : boolean = false;
  public saveButtonState : boolean = false;

  constructor(private http: HttpClient) {
      for(var i=0; i<this.events.length; i++) this.events[i] = [];

      this.socket = io.connect("http://localhost:3030");

      var date = new Date();
      this.current_date = date.getDate();
      this.current_month = date.getMonth();
      this.current_year = date.getFullYear();

      this.drawCalendar();
  }
  ngOnInit() {
      this.socket.on('update_event', (data: any) => {
          if(typeof data.month!==undefined && typeof data.year!==undefined && typeof data.date!==undefined) {
              this.current_month = parseInt(this.current_month);
              this.current_year = parseInt(this.current_year);
              if(parseInt(data.month)===this.current_month && parseInt(data.year)===this.current_year) {
                  var found = false;
                  for(var i=0; i<this.events[parseInt(data.date)].length; i++) {
                      if(this.events[parseInt(data.date)][i]._id===data._id){
                          this.events[parseInt(data.date)][i] = data;
                          found = true;
                          break;
                      }
                  }
                  if(found===false) this.events[parseInt(data.date)].push(data);
              }
          }
      });
      this.socket.on('delete_event', (data: any) => {
          if(typeof data.month!==undefined && typeof data.year!==undefined && typeof data.date!==undefined) {
              this.current_month = parseInt(this.current_month);
              this.current_year = parseInt(this.current_year);
              if(parseInt(data.month)===this.current_month && parseInt(data.year)===this.current_year) {
                  for(var i=0; i<this.events[parseInt(data.date)].length; i++) {
                      if(this.events[parseInt(data.date)][i]._id==data._id){
                          this.events[parseInt(data.date)].splice(i, 1);
                          break;
                      }
                  }
              }
          }
      });
  }
  public onChangeCalendar(event: any) {
      this.current_month = event.current_month;
      this.current_year = event.current_year;
      this.drawCalendar();
  }  
  public drawCalendar() {
      this.http.get(this.host + '/events/' + this.current_month + '/' + this.current_year).subscribe((data : any)=> {
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
  public initModal(event) {
      this.event_props.index = -1;
      this.event_props.date = event.target.id.split("_")[1];
      this.event_props.name = '';
      this.event_props.description = '';
      
      this.saveButtonState = false;
  }
  public loadModalData(event) {
      this.saveButtonState = false;
      
      this.event_props.index = parseInt(event.target.id.split("_")[2]);
      this.event_props.date = parseInt(event.target.id.split("_")[1]);
      this.event_props.name = this.events[this.event_props.date][this.event_props.index].name;
      this.event_props.description = this.events[this.event_props.date][this.event_props.index].description;
  }
}
