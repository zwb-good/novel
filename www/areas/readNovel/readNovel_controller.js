angular.module("readNovel.controller",['readNovel.service'])

.controller("ReadNovelController",function($scope,$ionicSideMenuDelegate,$state,readNovelService,$ionicPopover,$ionicLoading){
  $ionicLoading.show();
  //获取上一页面传来数据
  var startLength = localStorage.getItem('startLength');
  var endLength = localStorage.getItem('endLength');
  var position = localStorage.getItem('position');
  var length = localStorage.getItem('length');
  var bookUrl =  localStorage.getItem('bookUrl');
  var userId =  localStorage.getItem('userId');
  $scope.url = bookUrl;

  /* 上下章跳转 */
  $("#before_position").val(position)
  $("#after_position").val(position)
  
  //定义获取数据的方法
  var ready = function(bookUrl,startLength,endLength){
    readNovelService.getData(bookUrl,startLength,endLength,function(data){
      var text = data.rows;
      var reg = new RegExp('\r\n','g');
      var content = text[0].content.replace(reg,'<br/>');
      $scope.content = content;
      $("#sp_txt").html(content);
      $ionicLoading.hide();
    })
  }

  //获取用户设置
  var bg_color  //背景
  var font_family //字体
  var font_size //字体大小
  readNovelService.getSetting(userId,function(data){
    $scope.fontSize = data.rows[0].fontSize;
    font_size = data.rows[0].fontSize;
    font_family = data.rows[0].fontFamily;
    bg_color = data.rows[0].bgcColor;
    $scope.changeFont(font_family); 
    $scope.changeBgc(bg_color);
  })

  //页面一加载调用方法获取数据
  ready(bookUrl,startLength,endLength)

  //获取目录
  var catalog =  JSON.parse(localStorage.getItem('catalog'));
  $scope.catalogItems = JSON.parse(localStorage.getItem('catalog'));
  
  //上一章
  $scope.func_before = function(){
    var chapter = parseInt($("#before_position").val()) - 1;
    if(chapter < 0){
      showMsg("已是第一章")
    }else{
      for(var i in catalog){
        if(catalog[i].index == chapter){
          $("#before_position").val(catalog[i].index)
          ready(bookUrl,catalog[i].startLength,catalog[i].endLength)
        }
      }
    }
  }

  //下一章
  $scope.func_after = function(){
    var chapter = parseInt($("#after_position").val()) + 1;
    if(chapter == length){
      showMsg("到底咯")
    }else{
      for(var i in catalog){
        if(catalog[i].index == chapter){
          $("#after_position").val(catalog[i].index)
          ready(bookUrl,catalog[i].startLength,catalog[i].endLength)
        }
      }
    }
  }

  //控制隐藏菜单
  $scope.isShow = false;
  $scope.oneClick = function (){
    if($scope.isShow == false){
      $scope.isShow = true;
    }else{
      $scope.isShow = false;
    }
    $scope.goCatalog = function(){
      $ionicSideMenuDelegate.toggleLeft();
    }
  }
  //返回上一页
  $scope.back = function(){
    window.history.go(-1);
  }

  //跳转阅读界面
  $scope.func_read = function(start,end,position,length){
    $("#before_position").val(position)
    $("#after_position").val(position)
    ready(bookUrl,start,end)
    $ionicSideMenuDelegate.toggleLeft();
  }

  //背景浮动框
  $ionicPopover.fromTemplateUrl('./areas/readNovel/template.html',{
    scope:$scope
  }).then(function(popover){
    $scope.popover = popover;
  })

  $scope.openPopover = function($event){
    $scope.popover.show($event);
  }
  // 在隐藏浮动框后执行
  $scope.$on('popover.hidden', function() {
    bg_color = bg_color.substring(1)
    readNovelService.saveSetting(userId,font_family,bg_color,font_size,function(data){
      showMsg('设置成功')
    })
  });

  //改变字体样式
  $scope.changeFont = function(fonts){
    $('.text-m').css('font-family',fonts)
    font_family = fonts
  }

  //改变背景颜色
  $scope.changeBgc = function(color){
    $('.text-m').css('background-color',color)
    bg_color = color
  }

  //改变字体大小
  $scope.fontSizeDown = function(){
    $scope.fontSize = $scope.fontSize - 1
    $('.text-m').css('font-size',$scope.fontSize)
    font_size = $scope.fontSize
  }
  $scope.fontSizeUp = function(){
    $scope.fontSize = $scope.fontSize + 1
    $('.text-m').css('font-size',$scope.fontSize)
    font_size = $scope.fontSize
  }
  
})