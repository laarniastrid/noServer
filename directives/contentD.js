angular.module('myApp')

.directive('contentD', function() {

  return {
    retrict: 'E',
    templateUrl: '../views/content.html',
    controller: 'whlCntCtrl',
    scope: {
      text: '=',
    },

  }

}) // end contentD directive
