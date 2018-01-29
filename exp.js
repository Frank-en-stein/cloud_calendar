var calendar = require('node-calendar');

var cal = new calendar.Calendar(calendar.SUNDAY);
console.log(cal.monthdayscalendar(2018, 12))
