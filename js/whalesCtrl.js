angular.module('myApp')

.controller('whalesCtrl', function($scope, whalesSvc) {

  $scope.whales = whalesSvc.getWhales();


}) // end whalesCtrl controller
