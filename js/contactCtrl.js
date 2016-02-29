angular.module('myApp')

.controller('contactCtrl', function($scope) {

  $scope.contactPageText = 'this is the contact page';

  $scope.addPost = function() {
    console.log($scope.contact);
    $scope.contact = '';
  }


}) // end contactCtrl controller
