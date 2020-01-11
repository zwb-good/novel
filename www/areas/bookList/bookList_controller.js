/**
 * 小说书单列表页控制器
*/
angular.module('bookList.controller',['bookList.service'])
.controller('bookListCtrl',function($scope,$state,bookListService,$ionicPopup){
    //获取查询条件
    var type = localStorage.getItem('option');
    var title = localStorage.getItem('title');
    var condition = localStorage.getItem('condition');
    $scope.title = title

    //获取显示数据
    bookListService.getData(condition,type,function(data){
        console.log(data)
        $scope.data = data.rows;
        if(data.total == 0){
            showMsg("抱歉，暂时没有改类型的书")
        }
    })
    
    //点击返回，返回上一页
    $scope.func_back = function(){
        window.history.go(-1);
    }

    //跳转到小说介绍页面
    $scope.func_goIntroduction = function(id,url){
        localStorage.setItem('bookId',id)
        localStorage.setItem('bookUrl',url)
        $state.go('novelIntroduction');
    }
}) 