angular.module('myApp')

.directive('contentD', function() {

  return {
    retrict: 'E',
    templateUrl: '../views/content.html',
    controller: '../js/content.js',
    scope: {
      
    }
  }

}) // end contentD directive


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
    link: function(scope, ele, attr) {
      ele.on('mouseover', function() {
        $('.content-box', this).css({
          'border': '#2A9CE8 5px solid',
        })
      })
      ele.on('mouseout', function() {
        $('.content-box', this).css({
          // 'background': '#006699',
          'border': 'none',
        })
      })
    },
  }

}) // end of footerD directive
