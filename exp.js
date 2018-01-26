var calendar = require('node-calendar');

var cal = new calendar.Calendar(calendar.SUNDAY);
var yearCalendar = cal.yeardayscalendar(2018);
console.log(cal.monthdayscalendar(2018, 1))
