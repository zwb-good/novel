/**
 * 青春校园页的控制器模块
 */

angular.module('youthCampus.controller',[])
.controller('YouthCampusController',function($scope,$state){
    //返回上一页
    $scope.func_back = function(){
        window.history.go(-1);
    }
})