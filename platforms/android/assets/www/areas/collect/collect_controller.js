/**
 *我的书评页控制器
*/
angular.module('collect.controller',['collect.service'])
.controller('collectCtrl',function($scope,$state,collectService,$ionicPopup){
    //获取数据
    var userId = localStorage.getItem('userId')
    
    //获取书架信息
    collectService.getBook(userId,function(data){
        for(var i in data.rows){
            data.rows[i].time = dateFormat(data.rows[i].time,'yyyy-MM-dd HH:mm:ss')
        }
        $scope.data = data.rows;
        $scope.total = data.rows.length;
    })

    //点击返回，返回上一页
    $scope.func_back = function(){
        window.history.go(-1);
    }
    
    //取消收藏
    $scope.showConfirm = function(name,id){
        var confirmPopup = $ionicPopup.confirm({
            template:'确定取消收藏'+name,
            okText: '确定',
            cancelText:'取消'
        })
        confirmPopup.then(function(res){
            if(res){
                collectService.delete(id,function(data){
                    if(data.success){
                        showMsg('已取消收藏',0);
                    }
                })
            }
        })
    }
    
    //跳转到小说介绍页面
    $scope.func_goIntroduction = function(id,url){
        localStorage.setItem('bookId',id)
        localStorage.setItem('bookUrl',url)
        $state.go('novelIntroduction');
    }
}) 