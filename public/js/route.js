const app = angular.module('MyApp', ['ngRoute']);

app.controller('HomeController', function() {
  this.test = "hello there";
});

app.config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider) {

$locationProvider.html5Mode({ enabled: true, requireBase: false });

$routeProvider.when('/home', {
  templateUrl: 'test-episode.html',
  controller: 'HomeController',
  controllerAs: 'ctrl'
});

}]);
