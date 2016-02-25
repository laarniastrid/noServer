angular.module('myApp')

.directive('doStuff', function() {

  return {
    restrict: 'E',
    templateUrl: '../views/doStuff.html',
    scope: {
      route: '=',
      text: '=',
      boxImg: '=',
    },
  }

}) // end of footerD directive
