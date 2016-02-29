angular.module('myApp')

.controller('whalesCtrl', function($scope, whalesSvc) {

  $scope.whalesPageText = "this is the whales page";

  // $scope.stuffImgs = '../images/orcas01.jpg';

  $scope.myRoute = 'home';

  $scope.stuff = function() {
    whalesSvc.getWhales().then(function(response) {
      console.log(response.data);
      $scope.yourMom = response.data;
    })
  }

  $scope.stuff();



}) // end whalesCtrl controller
