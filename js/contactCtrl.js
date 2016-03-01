angular.module('myApp')

.controller('contactCtrl', function($scope) {

  $scope.contactPageText = 'Contact Me';

  $scope.addPost = function() {

    // if (!data) {
    //   console.error('fill in the form');
    // }
    //
    // data = JSON.stringify(data, undefined, 2);
    //
    // var stuff = new Blob([data], {type: 'text/json'});
    // var send = document.getElementById('contact-submit');
    //
    // send.download = new Date();
    // send.href = window.URL.createObjectURL(stuff);
    // send.dataset.downloadurl = ['text/json', send.download, send.href].join(':');

zz
    console.log($scope.contact);
    $scope.contact = '';
  }


}) // end contactCtrl controller
