angular.module("bookshop.controller", ['bookshop.service'])
.controller("BookshopController",function($scope,$state,bookshopService, $ionicSlideBoxDelegate,$ionicLoading){
  $ionicLoading.show();
  /**
   * 实现换一换功能的参数定义
   */
  var header_total;
  var middle_total;
  var bottom_total;
  var header_now_page = 1;
  var middle_now_page = 1;
  var bottom_now_page = 1;

  //获取轮播图片
  bookshopService.getCarousel(function(data){
    var a = []
    var b = []
    for(var i in data.rows){
      if(data.rows[i].position == 0){
        a.push(data.rows[i])
      }
      if(data.rows[i].position == 1){
        b.push(data.rows[i])
      }
    }
    $scope.topCarousel = a
    $scope.middleCarousel = b
    $ionicSlideBoxDelegate.update();
  })

  //获取精品推荐数据
  bookshopService.getBook(header_now_page,0,function(data){
    $scope.header = data.rows
    header_total = data.total
  })

  //获取最好看的书数据
  bookshopService.getBook(middle_now_page,1,function(data){
    $scope.middle = data.rows
    middle_total = data.total
  })

  //获取口碑精选数据
  bookshopService.getBook(bottom_now_page,2,function(data){
    $scope.bottom = data.rows
    bottom_total = data.total
    $ionicLoading.hide();
  })

  //换一换
  $scope.other = function(position){
    if(position == 0){
      var header_page = Math.floor(header_total/8)
      if(header_page >= 2){
        if(header_now_page == header_page){
          showMsg('抱歉，没有更多数据了')
        }else{
          header_now_page ++;
          bookshopService.getBook(header_now_page,0,function(data){
            $scope.header = data.rows
          })
        }
      }else{
        showMsg('抱歉，没有更多数据了')
      }
    }
    if(position == 1){
      var middle_page = Math.floor(middle_total/8)
      if(middle_page >= 2){
        if(middle_now_page == middle_page){
          showMsg('抱歉，没有更多数据了')
        }else{
          middle_now_page ++;
          bookshopService.getBook(middle_now_page,1,function(data){
            $scope.middle = data.rows
          })
        }
      }else{
        showMsg('抱歉，没有更多数据了')
      }
    }
    if(position == 2){
      var bottom_page = Math.floor(bottom_total/8)
      if(bottom_page >= 2){
        if(bottom_now_page == bottom_page){
          showMsg('抱歉，没有更多数据了')
        }else{
          bottom_now_page ++;
          bookshopService.getBook(bottom_now_page,2,function(data){
            $scope.bottom = data.rows
          })
        }
      }else{
        showMsg('抱歉，没有更多数据了')
      }
    }
  }

  //跳转至介绍页面
  $scope.func_goIntroduction = function(id,url){
    localStorage.setItem('bookId',id)
    localStorage.setItem('bookUrl',url)
    $state.go('novelIntroduction');
  }
})
