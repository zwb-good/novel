/**
 * 小说排行页控制模块
  */
angular.module('rankingList.controller',['rankingList.service'])
.controller('rankingListCtrl',function($scope,$state,rankingListFty){
    //点击返回，返回书城
    $scope.func_back = function(){
        window.history.go(-1);
    }
    //进入view时触发
    $scope.$on('$ionicView.enter', function (e) {
        getRankData();
        $scope.getRankDetailData(100);
    });
    //获取侧边栏数据
    function getRankData(){
        var promise = rankingListFty.getRankData();
        promise.then(
            //成功的回调函数
            function(data){
                if(data){
                    $scope.rankData = data;
                }
            }
        );
    }
    //获取侧边菜单栏对应的分类信息数据
    $scope.getRankDetailData = function(num){
        var promise = rankingListFty.getRankDetailData(num);
        promise.then(
            //成功的回调函数
            function(data){
                if(data){
                    $scope.rankDetailData = data;
                }
            }
        );
    }
    //左侧排行的单击样式修改
    $scope.rankLeftClick = function(e){
        e.target.className = "nav-current";
        $(e.target).siblings().removeClass().addClass('nav-blur');
    }
}) 