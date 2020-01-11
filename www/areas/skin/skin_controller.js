/**
 *个性皮肤页控制器
*/
angular.module('skin.controller',[])
  .controller('skinCtrl',function($scope,$state,$ionicActionSheet){
    if(localStorage["imageHead"]){
      var image = document.getElementById('imageHead');
      image.src = "data:image/jpeg;base64," + localStorage["imageHead"];
    }
    //点击返回，返回上一页
    $scope.func_back = function(){
      window.history.go(-1);
    }
    // 显示上拉菜单
    $scope.func_changeHeadImage=function(){
      $ionicActionSheet.show({
        buttons: [
          { text: '照相机' },
          { text: '图库' },
        ],
        titleText: '请选择文件源',
        cancelText: '取消',
        buttonClicked: function(index) {
          switch(index){
            case 0:func_getPicFromCamera();
              break;
            case 1:func_getPicFromPicture();
              break;
            }
          return true;
        }
      });
    }
    
    //打开相机
    var func_getPicFromCamera = function(){
      console.log("模拟打开相机获取头像！")
    }
    //打开相册
    var func_getPicFromPicture = function(){
      console.log("模拟打开相册更换头像！")
    }
  }) 