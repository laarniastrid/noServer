angular.module('myApp')

.service('whalesSvc', function($http) {

  this.getWhales = function() {
    return $http({
      method: 'GET',
      url: 'js/usWhalesOrgApi.json',
    })
  }

}) // end whalesSvc service
