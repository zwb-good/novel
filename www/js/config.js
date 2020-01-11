/**
 * 项目的全局配置文件，解决一些兼容性问题
  */

angular.module('config',[])

.factory('configService',function(){
  var hostUrl = 'http://192.168.1.149:8080/novel'
  return {
    getHostUrl:function(){
      return hostUrl
    }
  }
})

.config(function($ionicConfigProvider){
    //在android设备中确保tabs标签栏在底部
    $ionicConfigProvider.platform.android.tabs.position("bottom");
    

})
