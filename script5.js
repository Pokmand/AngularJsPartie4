var testApp = angular.module('app',[]);

testApp.controller('testCtrl', function($scope){
  $scope.hide = function(){
    $scope.hide1=false;
  }
  $scope.show = function(){
    $scope.hide1=true;
  }
});
