/**
 *我的书评页控制器
*/
angular.module('comment.controller',['comment.service'])
.controller('commentCtrl',function($scope,$state,commentService,$ionicPopup){
  //获取用户信息
  var userId = localStorage.getItem('userId')
  $scope.headUrl = localStorage.getItem('headUrl')
  $scope.readerName = localStorage.getItem('readerName')

  //获取我的书评信息
  commentService.getData(userId,function(data){
    if(data.total == 0){
      showMsg("你还没有发布评论，赶快去阅读评论吧")
    }
    for(var i in data.rows){
      data.rows[i].time = dateFormat(data.rows[i].time,'yyyy-MM-dd HH:mm:ss')
    }
    console.log(data)
    console.log(data.rows)
    $scope.data = data.rows
  })
  
  //点击返回，返回上一页
  $scope.func_back = function(){
    window.history.go(-1);
  }

  //删除
  $scope.delete = function(id){
    commentService.delete(id,function(data){
      if(data.success){
        showMsg(data.msg,0);
      }
    })
  }
  
  

  //跳转至介绍页面
  $scope.func_goIntroduction = function(id,url){
    localStorage.setItem('bookId',id)
    localStorage.setItem('bookUrl',url)
    $state.go('novelIntroduction');
  }
}) 