/**
 * Created by Orest on 21.12.2014.
 */
var MyApp = angular.module("MyApp");

MyApp.service("MiniCalendarService", function() {
    var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var days = [
        {"name": "Mon", "index": "1"},
        {"name": "Tue", "index": "2"},
        {"name": "Wed", "index": "3"},
        {"name": "Thu", "index": "4"},
        {"name": "Fri", "index": "5"},
        {"name": "Sat", "index": "6"},
        {"name": "Sun", "index": "0"}
    ];

    var months = [
        {"name": "January", "index": "0"},
        {"name": "February", "index": "1"},
        {"name": "March", "index": "2"},
        {"name": "April", "index": "3"},
        {"name": "May", "index": "4"},
        {"name": "June", "index": "5"},
        {"name": "July", "index": "6"},
        {"name": "August", "index": "7"},
        {"name": "September", "index": "8"},
        {"name": "October", "index": "9"},
        {"name": "November", "index": "10"},
        {"name": "December", "index": "11"}
    ];
    var month;
    var year;
    var monthLength;
    var monthDays = [[],[],[],[],[],[]];
    var currentDate = {};

    var startingDay;
    var current_date = new Date();

    var getLength = function(month, year){
        if (month == 1) { // February only!
            if ((year % 4 === 0 && year % 100 != 0) || year % 400 === 0) {
                return 29;
            }
        }
        else{
            return daysInMonth[month];
        }
    };
    this.newCalendar = function(_month, _year){
        month = (isNaN(_month) || _month === null) ? current_date.getMonth() : _month;
        year = (isNaN(_year) || _year === null) ? current_date.getFullYear() : _year;
        monthLength = getLength(month, year);
        var firstDay = new Date(year, month, 1);
        monthDays = [[],[],[],[],[],[]];
        if(firstDay.getDay() === 0){
            startingDay = 6;
        } else{
            startingDay = firstDay.getDay() - 1;
        }

        var dayNumber = 1;
        var count = 0;
        var daysInWeek = 7;
        var maxWeekCount = 6;
        for ( var i = 0; i < maxWeekCount; i++) {
            for (var j = 0; j < daysInWeek; j++) {
                if (j < startingDay && i === 0) {
                    monthDays[i][j] = null;
                    count++;
                }
                else {
                    monthDays[i][j] = dayNumber;
                    dayNumber++;
                    if (dayNumber > monthLength){
                        break;
                    }
                }
            }
            if (dayNumber > monthLength){
                break;
            }
        }
        currentDate.year = year;
        currentDate.month = months[month];
    };
    this.getCalendarDays = function(){
        return monthDays;
    };
    this.getDays = function(){
        return days;
    };
    this.getMonths = function(){
        return months;
    };
    this.getCurrentDate = function(){
        return currentDate;
    };
});