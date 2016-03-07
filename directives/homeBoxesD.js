angular.module('myApp')

.directive('homeBoxesD', function() {

  return {
    restrict: 'E',
    templateUrl: 'views/homeBoxes.html',
    scope: {
      route: '=',
      text: '=',
      boxImg: '='
    },
    // controller: 'whalesCtrl',
    link: function(scope, ele, attr) {
      ele.on('mouseover', function() {
        $('.content-box', this).css({
          // 'border': '#2A9CE8 5px solid',
          'box-shadow': '0px 0px 35px #0B2442',
        })
      })
      ele.on('mouseout', function() {
        $('.content-box', this).css({
          // 'background': '#006699',
          // 'border': 'none',
          'box-shadow': 'none',
        })
      })
    }
  }

}) // end of footerD directive
