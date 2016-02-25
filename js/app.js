angular.module('myApp', ['ui.router', 'firebase'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '../views/home.html',
      controller: 'mainCtrl',
    }) // end home
    .state('whales', {
      url: '/whales',
      templateUrl: '../views/whales.html',
      controller: 'whalesCtrl',
    }) // end whales
    .state('dolphins', {
      url: '/dolphins',
      templateUrl: '../views/dolphins.html',
      controller: 'dolphinsCtrl',
    }) // end whales

    $urlRouterProvider.otherwise('/');
}) // end of app config
