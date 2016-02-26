angular.module('myApp')

.controller('whalesCtrl', function($scope, whalesSvc) {

  $scope.whales = whalesSvc.getWhales();

  $scope.whalesPageText = "this is a test";

}) // end whalesCtrl controller
