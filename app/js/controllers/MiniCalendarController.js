/**
 * Created by Orest on 21.12.2014.
 */
var Myapp = angular.module("MyApp");

Myapp.controller("MiniCalendarController", function($scope, MiniCalendarService){

    $scope.newCalendar = MiniCalendarService.newCalendar();
    $scope.days = MiniCalendarService.getDays();
    $scope.currentDate = MiniCalendarService.getCurrentDate();
    $scope.calendarDays = MiniCalendarService.getCalendarDays();

});