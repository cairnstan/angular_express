var app =angular.module('expressApp', []);

app.controller('MainController', function($scope, $http){
  $scope.instructors = [];
  $scope.staff = [];

  $http.get('/instructors').then(function(response){
    $scope.instructors = response.data;
  });
  $http.get('/staff').then(function(response){
    $scope.staff = response.data;
  });
})
