angular.module('myApp')

.directive('contentD', function() {

  return {
    retrict: 'E',
    templateUrl: '../views/content.html',
    // controller: 'contentCtrl',
    scope: {
      text: '=',
    }

  }

}) // end contentD directive
