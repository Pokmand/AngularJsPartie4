var carapp = angular.module("carapp",[]);
carapp.controller("carcontrl", function($scope, $http) {
$http.get("voiture.json")
  .then(function(response) {
    $scope.mydata = response.data;
  });
});
