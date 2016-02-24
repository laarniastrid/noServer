angular.module('myApp', ['ui.router', 'firebase'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../views/home.html',
      controller: 'mainCtrl',
    }) // end home state
    .state('whales', {
      url: '/whales',
      templateUrl: '../views/whales.html',
      controller: 'whalesCtrl',
    }) // end whales state

}) // end of app config
