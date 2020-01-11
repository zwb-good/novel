angular.module("cartoon.controller",[])

.controller("CartoonController",function($scope,$state){
    $scope.goSearch = function(){
        $state.go('search')
      }
      $scope.goYouthCampus = function(){
        $state.go('youthCampus')
      }
})