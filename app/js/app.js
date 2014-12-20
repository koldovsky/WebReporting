/**
 * Created by Orest on 20.12.2014.
 */
var MyApp = angular.module("MyApp", []);

MyApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
        when('/', {
            templateUrl: 'app/view/month.html',
            controller: 'MonthController'
        }).
        when('/month', {
            templateUrl: 'app/view/month.html',
            controller: 'MonthController'
        }).
        when('/week', {
            templateUrl: 'app/view/week.html',
            controller: 'WeekController'
        }).
        when('/day', {
            templateUrl: 'app/view/day.html',
            controller: 'DayController'
        }).
        otherwise({
            redirectTo: '/'
        })
}]);