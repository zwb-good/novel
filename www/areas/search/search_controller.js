/** 
 * 搜索页面控制器
*/
angular.module('search.controller',[])
.controller('SearchController',function($scope,$state){
    //点击返回，返回上一页
    $scope.func_back = function(){
        window.history.go(-1);
    }

    //跳转至结果页面
    $scope.func_search = function(){
        var condition = $("#search_txt").val();
        localStorage.setItem('condition',condition)
        localStorage.setItem('title','搜索结果')
        localStorage.setItem('option','1')
        $state.go('bookList');
    }
})