/**
 * 出版页的控制器模块
 */

angular.module('publish.controller',[])
.controller('PublishController',function($scope,$state){
    //返回上一页
    $scope.func_back = function(){
        window.history.go(-1);
    }
    $scope.goShortStory = function(){
        $state.go('tabd.shortStory');
    }
})