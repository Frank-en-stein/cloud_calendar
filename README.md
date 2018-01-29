# cloud_calendar
Sharable calendar implemented with full stack JS

## Dependency: 
* Mongo Database
* Mongoose ODM
* Express Application Framework
* NodeJS v8
* AngularJS 4
* Bootstrap 3 CSS Framework
* Modern Web Browser
* Socket IO

## Installation
* git clone/zip download the while repo
* Navigate to cloud_calendar and open terminal
* Run `npm install`

## Run
* Open a terminal and run `mongod`
* Navigate to cloud_calendar and open terminal
* Run `npm run start`
* Open Browser and go to [http://localhost:3000](http://localhost:3000)

## Features
* Scalable UI
* Month/year picker: click on month/year to open widget or use arrows to navigate to previous/next month
* Today's date is marked with red
* Click '+' icon to add an event on any particular date. A popup will receive the entry and store the event when saved.
* Any date-cell having an event will show a "list" icon. Clicking it will view all the events on that day in a popup.
* Clicking on an event anywhere (calendar page or event list) will allow user to edit/delete the event.
* All saved event details are updated real-time atumatically on all the instances of the application running on the network.
