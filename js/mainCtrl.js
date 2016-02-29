angular.module('myApp')

.controller('mainCtrl', function($scope) {

    // $scope.test = 'hello there';

    // home page whales box
    $scope.routeW = 'whales';
    $scope.textW = 'Whales!!';
    $scope.imgW = '../images/whalesGen.jpg';

    // home page dolphins box
    $scope.routeD = 'dolphins';
    $scope.textD = 'Dolphins!!';
    $scope.imgD = '../images/dolphinsGen.jpg';

    // home page save the whales box
    $scope.routeSave = 'saveWhales';
    $scope.textSave = 'Save the Whales!!';
    $scope. imgSave = '../images/orcas01.jpg';

}) // end mainCtrl controller
