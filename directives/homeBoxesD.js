angular.module('myApp')

.directive('homeBoxesD', function() {

  return {
    restrict: 'E',
    templateUrl: '../views/homeBoxes.html',
    scope: {
      route: '=',
      text: '=',
      boxImg: '='
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
    }
  }

}) // end of footerD directive
