/**
 * 个人中心控制器
  */
angular.module('writeBook.controller',['writeBook.service'])
.controller('writeBookCtrl',function($scope,$state,writeBookService){
  var userId = localStorage.getItem('userId')
  // 未登录状态下，链接跳转到登录页面,否则跳转到个人中心并加载个人书架
  if(userId == null){
    $scope.userSref = 'loginPage';
    $scope.readerName = "登陆"
    $scope.home_isShow = false
    $scope.headUrl = 'img/home/portrit.jpg'
  }else{
    $scope.userSref = 'user({userId:'+userId+'})'
    // 获取用户信息
    $scope.headUrl = localStorage.getItem('headUrl')
    $scope.readerName = localStorage.getItem('readerName') //用户昵称
    $scope.home_isShow = localStorage.getItem('home_isShow') //退出登录功能是否显示
  }

  //我的消息
  $scope.myNews = function(){
    if(userId == null){
      isLogin()
    }else{
      $state.go('myNews')
    }
  }

  //我的书评
  $scope.comment = function(){
    if(userId == null){
      isLogin()
    }else{
      $state.go('comment')
    }
  }

  //我的收藏
  $scope.collect = function(){
    if(userId == null){
      isLogin()
    }else{
      $state.go('collect')
    }
  }

  //获取news
  writeBookService.getData(userId,function(data){
    var news = data.rows[0].news;
    if(news>0){
      $("#redNews").addClass("redNews");
      $("#redNews").text(news);
    } 
  })
})