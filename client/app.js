var app = angular.module('denbros', [
  'ngRoute',
  'ngResource',
  'denbros.home',
  'denbros.about',
  'denbros.services',
]);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/home'
    })
    .when('/home', {
      templateUrl: 'home/home.html'
    })
    .when('/about', {
      templateUrl: 'about/about.html'
    })
    .otherwise({
      redirectTo: '/home'
    });
});
