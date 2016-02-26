angular.module('myApp')

.controller('mainCtrl', function($scope) {

    // $scope.test = 'hello there';

    // home page whales box
    $scope.routeW = 'whales';
    $scope.textW = 'whale page box link here';
    $scope.imgW = 'whalesGen.jpg';

    // home page dolphins box
    $scope.routeD = 'dolphins';
    $scope.textD = 'dolphin page box link here';
    $scope.imgD = 'dolphinsGen.jpg';

}) // end mainCtrl controller
