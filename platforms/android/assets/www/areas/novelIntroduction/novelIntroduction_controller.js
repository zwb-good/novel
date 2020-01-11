angular.module("novelIntroduction.controller",['novelIntroduction.service'])
.controller("novelIntroductionController",function($scope,$state,$ionicSlideBoxDelegate,novelIntroductionService,$ionicLoading){
  $ionicLoading.show();
  //获取上一页传来参数
  var bookId = localStorage.getItem('bookId');
  var bookUrl = localStorage.getItem('bookUrl');
  $scope.bookId = bookId;
  $scope.url = bookUrl;
  
  // 获取用户信息
  var userId = localStorage.getItem('userId');

  //根据Id获取书的信息
  novelIntroductionService.getData(bookId,function(data){
    $scope.data = data.rows;
  }); 

  //获取评论信息
  novelIntroductionService.getComment(bookId,function(data){
    if(data.total < 3){
      $scope.isShow = false;
    }else{
      $scope.isShow = true;
      $ionicSlideBoxDelegate.update();
      $scope.comment1 = data.rows[0];
      $scope.comment2 = data.rows[1];
      $scope.comment3 = data.rows[2];
    }
  })
  
  //根据url获取目录
  novelIntroductionService.getCatalog(bookUrl,function(data){
    $scope.hot = data.rows[data.rows.length-1].title;
    $scope.length = data.total;
    localStorage.setItem('catalog',JSON.stringify(data.rows))
    localStorage.setItem('startLength',data.rows[0].startLength)
    localStorage.setItem('endLength',data.rows[0].endLength)
    localStorage.setItem('position',data.rows[0].index)
    localStorage.setItem('length',data.total) //总章节数
    $ionicLoading.hide();
  }); 

  //返回上一页
  $scope.back = function(){
    window.history.go(-1);
  }

  //查看评论
  $scope.func_detail = function(num){
    var idName = 'txt_' + num;
    var commentId = $("#"+idName).val()
    localStorage.setItem('commentId',commentId)
    $state.go('replay')
  }

  //阅读页面
  $scope.func_goRead = function(){
    $state.go('readNovel')
  }

  //收藏本书
  $scope.func_collect = function(){
    if(userId == null){
      isLogin()
    }else{
      novelIntroductionService.addToBookshelf(userId,bookId,function(data){
        if(data.success){
          showMsg('收藏成功');
        }else{
          showMsg(data.msg)
        }
      })
    }
  }

  //添加到书架
  $scope.addBook = function(){
    if(userId == null){
      isLogin()
    }else{
      novelIntroductionService.addToBookshelf(userId,bookId,function(data){
        if(data.success){
          showMsg('添加成功');
        }
        else{
          showMsg(data.msg)
        }
      })
    }
  }

  //写评论
  $scope.writeComment = function(){
    if(userId == null){
      isLogin()
    }else{
      $state.go('writeComment')
    }
  }
})