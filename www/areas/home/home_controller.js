/**
 * 首页控制器
  */
angular.module('home.controller',['home.service'])
.controller('HomeCtrl',function($scope,$ionicPopup,$state,homeService){
  
  var userId = localStorage.getItem('userId')
  // 登录状态检测
  if(userId == null){
    $scope.headUrl = '/www/img/home/portrit.jpg'
    isLogin()
  }else{
    // 获取用户信息
    $scope.headUrl = localStorage.getItem('headUrl')
    $scope.readerName = localStorage.getItem('readerName') //用户昵称
    //获取书架信息
    homeService.getBook(userId,function(data){
      if(data.total == 0){
        showMsg("你暂时还没有添加书籍，快去添加吧",1)
      }
      $scope.data = data.rows;
    })
  }

  //跳至查找页
  $scope.goSearch = function(){
    $state.go('search')
  }

  //跳转到小说介绍页面
  $scope.func_goIntroduction = function(id,url){
    localStorage.setItem('bookId',id)
    localStorage.setItem('bookUrl',url)
    $state.go('novelIntroduction');
  }
}) 