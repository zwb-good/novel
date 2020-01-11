/**
 * 定义公共方法
 */

angular.module('controller',[]).controller('Ctrl',function($scope,$ionicPopup,$timeout,$state){
    //挂载随机参数，强制刷新图片
    $scope.param = (new Date()).valueOf();

    // 格式化后台获取的时间
　　dateFormat = function (date, format) {
        date = new Date(date);
        var o = {
            'M+' : date.getMonth() + 1, //month
            'd+' : date.getDate(), //day
            'H+' : date.getHours(), //hour
            'm+' : date.getMinutes(), //minute
            's+' : date.getSeconds(), //second
            'S' : date.getMilliseconds() //millisecond
        };
        if (/(y+)/.test(format)){
            format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
        }
        for (var k in o){
            if (new RegExp('(' + k + ')').test(format)){
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
            }
        }
        return format;
    }

    //提示框
    showMsg = function(title,operate){
        // 弹出“收藏成功”对话框
        var myAlert = $ionicPopup.alert({
        title: title+'!',
        okText: '确定',
        cssClass: 'favorite-popup'
        });
        myAlert.then(function (res) { // 监听ok按钮的点击
            // console.log(' 详情页面收藏按钮测试');
            if(operate == 0){
                window.location.reload();
            }
        });
        $timeout(function () {
            myAlert.close(); // 1.5秒后自动关闭弹窗
            if(operate == 0){
                window.location.reload();
            }
        }, 1500); 
    }

    //登录提示
    isLogin = function(){
        var confirmPopup = $ionicPopup.confirm({
            template:'你还没有登陆，快去登录吧！',
            okText: '立即登录',
            cancelText:'暂不登录'
        })
        confirmPopup.then(function(res){
            if(res){
            $state.go('loginPage')
            }
        })
    }
})

//控制页面加载后执行事件模块
.directive('onFinishRender', function ($timeout){
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            }
        }
    }
})