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

    // home page save the whales box
    $scope.routeSave = 'saveWhales';
    $scope.textSave = 'save the whales!';
    $scope. imgSave = 'orcas01.jpg';

}) // end mainCtrl controller