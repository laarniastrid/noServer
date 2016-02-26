angular.module('myApp', ['ui.router'])

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
    .state('whale', {
      url: '/whales/:whaleId',
      templateUrl: '../views/whale.html',
      controller: 'whaleCtrl',
    })

    .state('dolphins', {
      url: '/dolphins',
      templateUrl: '../views/dolphins.html',
      controller: 'dolphinsCtrl',
    }) // end dolphins

    .state('about', {
      url: '/about',
      templateUrl: '../views/about.html',
      controller: 'aboutCtrl',
    }) // end about

    .state('contact', {
      url: '/contact',
      templateUrl: '../views/contact.html',
      controller: 'contactCtrl',
    }) // end contact


    $urlRouterProvider.otherwise('/');
}) // end of app config
