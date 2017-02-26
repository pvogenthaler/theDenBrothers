var app = angular.module('denbros', [
  'ngRoute',
  'ngResource',
  'denbros.home',
  'denbros.services',
]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/home'
    })
    .when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
