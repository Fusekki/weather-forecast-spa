//MODULE

var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

//ROUTES

weatherApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when ('/', {
        templateUrl: 'pages/home.htm',
        controller: 'homeController'
    })
    
    .when ('/forecast', {
        templateUrl: 'pages/forecast.htm',
        controller: 'forecastController'
    })
    
});

//CONTOLLERS

weatherApp.controller('homeController', ['$scope', function ($scope) {
    

    
}]);

weatherApp.controller('forecastController', ['$scope', function ($scope) {
    


}]);
