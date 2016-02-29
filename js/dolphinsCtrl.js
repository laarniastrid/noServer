angular.module('myApp')

.controller('dolphinsCtrl', function($scope, whalesSvc) {

  $scope.dolphinsPageText = 'this is the dolphin page';

  $scope.myRoute = 'home';
  $scope.allDolphins = [];

  $scope.stuff = function() {
    whalesSvc.getWhales().then(function(response) {
      // console.log(response.data);
      $scope.myDolphins = response.data;
      $scope.myDolphins.forEach(function(entry) {
        var check = entry.value.toLowerCase();
        if (check.includes('dolphin') || check.includes('porpoise') || check.includes('killer')) {
          $scope.allDolphins.push(entry);
        }
      })
    })
  }

  $scope.stuff();

}) // end dolphinsCtrl controller
