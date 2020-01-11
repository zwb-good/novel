/**
 * 个人中心控制器
  */
angular.module('user.controller',['ngCordova','user.service'])
  .controller('UserCtrl', function ($scope,$state,$cordovaCamera,$ionicActionSheet,$ionicHistory,$stateParams,userService){
    //检测本地信息
    var userId = localStorage.getItem('userId')
    $scope.headUrl = localStorage.getItem('headUrl')
    $scope.readerName = localStorage.getItem('readerName') //用户昵称

    //获取个人信息
    var readerId
    userService.getData(userId,function(data){
      $scope.data = data.rows;
      readerId = data.rows[0].id
      var sex = data.rows[0].sex;
      if(sex == '女'){
        $("#op_men").removeAttr("selected")
        $("#op_woman").attr("selected",'selected')
      }
      if(sex == '男'){
        $("#op_woman").removeAttr("selected")
        $("#op_men").attr("selected",'selected')
      }
    })

    //点击返回，返回主页
    $scope.func_back = function(){
      window.history.go(-1);
    }

    //修改信息时改变保存按钮样式
    $("input").change(function(){
      $("#save").removeClass("a-save");
      $("#save").addClass("save");
    })
    
    //修改性别
    $("#sex").change(function(){
      $("#save").removeClass("a-save");
      $("#save").addClass("save");
    })

    //保存修改信息
    $("#save").click(function(){
      updateUserInfo();
    })

    function updateUserInfo(){
      var name = $("#userName").val();
      var sex = $("#sex").val();
      var signature = $("#word").val();
      var headUrl = $scope.headUrl;
      userService.saveChange(readerId,name,sex,signature,headUrl,function(data){
        if(data.success){
          showMsg('修改成功')
          localStorage.setItem('readerName',name);
          $("#save").removeClass("save");
          $("#save").addClass("a-save");
        }
      })
    }

    // 显示上拉菜单
    $scope.func_changeHeadImage = function () {
      $ionicActionSheet.show({
        buttons: [
          { text: '照相机' },
          { text: '图库' },
        ],
        titleText: '请选择文件源',
        cancelText: '取消',
        buttonClicked: function (index) {
          switch (index) {
            case 0: func_getPicFromCamera();
              break;
            case 1: func_getPicFromPicture();
              break;
          }
          return true;
        }
      });
    }
    // 从摄像头获取图片
    var func_getPicFromCamera = function () {
      var options = {     // 设置图片压缩等参数
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation: true
      };
      $cordovaCamera.getPicture(options).then(function (imageData) {
        var key = ''
        //  如果之前没有设置头像，那么用时间戳指定新添加头像的key
        if ($scope.headUrl == 'img/default.jpg') {
          key = (new Date()).valueOf() + '.jpg'
        } else {    // 如果只是修改头像，则还是用原来的key，在七牛空间里同名文件覆盖
          key = $scope.headUrl.split('/')[$scope.headUrl.split('/').length - 1];
        }
        //  获取上传凭证并上传图片到七牛，imageData是Base64编码后的图片字符串
        userService.getToken(key, function (data) {
          putb64(imageData, key, data.token)
        })
      });
    }
    // 从相册获取图片
    var func_getPicFromPicture = function () {
      var options = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation: true
      };
      $cordovaCamera.getPicture(options).then(function (imageData) {     //获取头像图片并上传
        var key = ''
        //  如果之前没有设置头像，那么用时间戳指定新添加头像的key
        if ($scope.headUrl == 'img/default.jpg') {
          key = (new Date()).valueOf() + '.jpg'
        } else {    // 如果只是修改头像，则还是用原来的key，在七牛空间里同名文件覆盖
          key = $scope.headUrl.split('/')[$scope.headUrl.split('/').length - 1];
        }
        //  获取上传凭证并上传图片到七牛，imageData是Base64编码后的图片字符串
        userService.getToken(key, function (data) {
          putb64(imageData, key, data.token)
        })
      });
    }

    // 使用base64上传模式上传到七牛
    function putb64(imageData, key, token) {
      // 获取base64编码后的图片字符串
      var picStr = imageData;
      //  计算base64编码前文件大小
      var picLength = getPicLength(imageData);
      // 这是七牛专门为base64上传模式提供的服务器url，指定key上传要进行base64加密
      var url = "http://upload.qiniup.com/putb64/" + picLength + "/key/" + window.btoa(key);
      //  这是你的七牛的空间域名
      var domain = "http://pth6t1mk7.bkt.clouddn.com/"
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {    // 监听上传响应
        if (xhr.readyState == 4) {                   // 上传成功
          var data = JSON.parse(xhr.responseText)     // 获取图片key
          $scope.headUrl = domain + data.key
          updateUserInfo()      // 更新用户头像
        }
      }
      // 配置上传参数
      xhr.open("POST", url, true);
      xhr.setRequestHeader("Content-Type", "application/octet-stream");
      xhr.setRequestHeader("Authorization", "UpToken " + token);    // 设置你的上传凭证，要从服务器获取
      xhr.send(picStr);   // 开始上传图片
    }

    // 获取图片文件大小
    function getPicLength(imageData) {
      var equalIndex = imageData.indexOf('=');
      if (imageData.indexOf('=') > 0) {
        imageData = imageData.substring(0, equalIndex);
      }
      var picLength = parseInt(imageData.length - (imageData.length / 8) * 2);
      return picLength;
    }
})