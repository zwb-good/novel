/**
 * 目录的控制模块
*/
angular.module('catalog.controller',['catalog.service'])
.controller('catalogCtrl',function($scope,catalogService,$state){
    //获取上一页面传来的bookId
    var bookId =  localStorage.getItem('bookId');
    var bookUrl =  localStorage.getItem('bookUrl');
    $scope.url = bookUrl;
    
    //获取目录
    /* catalogService.getCatalog(bookUrl,function(data){
        $scope.data = data.rows;
    }) */
    $scope.data =  JSON.parse(localStorage.getItem('catalog'));

    //点击返回，返回上一页
    $scope.func_back = function(){
        window.history.go(-1);
    }

    //跳转阅读界面
    $scope.func_read = function(start,end,position,length){
        localStorage.setItem('startLength',start)
        localStorage.setItem('endLength',end)
        localStorage.setItem('position',position)
        localStorage.setItem('length',length)
        $state.go('readNovel')
    }
})