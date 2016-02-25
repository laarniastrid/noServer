angular.module('myApp')

.service('whalesSvc', function($http) {

  var baseUrl = 'http://pokeapi.co/api/v2/';

  this.getWhales = function() {
    return $http({
      method: 'GET',
      url: baseUrl,
    }).then(function(response) {
      return response;
    })

  } // end getWhales


}) // end whalesSvc service
