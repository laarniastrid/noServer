angular.module('myApp')

.controller('whalesCtrl', function($scope, whalesSvc) {

  $scope.whales = whalesSvc.getWhales();

  $scope.whalesPageText = "this is the whales page";

}) // end whalesCtrl controller
