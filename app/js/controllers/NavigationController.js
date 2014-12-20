/**
 * Created by Orest on 20.12.2014.
 */
var MyApp = angular.module("MyApp");

MyApp.controller("NavigationController", function($scope, $location){
    $scope.go = function(path){
        $location.path( path );
    };
});