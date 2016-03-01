angular.module('myApp')

.controller('contactCtrl', function($scope) {

  $scope.contactPageText = 'Contact Me';

  $scope.addPost = function(data) {

    $.ajax({
        url: "http://formspree.io/ecriyliz.yilrjsjy@gmail.com",
        method: "POST",
        data: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.text,
        },
        dataType: "json"
    });

    // alert('there are bees!');

    console.log($scope.contact);
    $scope.contact = '';
  }


}) // end contactCtrl controller
