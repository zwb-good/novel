/**
 * 小说分类页控制模块
  */
angular.module('sort.controller',['sort.service'])
.controller('sortCtrl',function($scope,$state,sortService){
    //点击返回，返回书城
    $scope.func_back = function(){
        window.history.go(-1);
    }

    //获取分类数据
    sortService.getData(function(data){
        $scope.data = data.rows;
    })

    //点击返回，返回书城
    $scope.goBookList = function(typeId,title){
        var condition = typeId;
        localStorage.setItem('option','0')
        localStorage.setItem('title',title+'小说')
        localStorage.setItem('condition',condition)
        $state.go('bookList');
    }
}) 