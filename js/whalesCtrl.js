angular.module('myApp')

.controller('whalesCtrl', function($scope, whalesSvc) {

  $scope.whalesPageText = "this is the whales page";

  // $scope.stuffImgs = '../images/orcas01.jpg';

  $scope.myRoute = 'home';
  $scope.allWhales = [];

  $scope.stuff = function() {
    whalesSvc.getWhales().then(function(relsponse) {
      // console.log(response.data);
      $scope.myWhales = response.data;
      $scope.myWhales.forEach(function(entry) {
        var check = entry.value.toLowerCase();
        if (check.includes('whale') && !(check.includes('killer'))) {
          $scope.allWhales.push(entry);
        } else if (check.includes('narwhal')) {
          $scope.allWhales.push(entry);
        }
      })
    })
  }

  $scope.stuff();



}) // end whalesCtrl controller
