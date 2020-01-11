// 注册数据服务
angular.module("registPage.service",[])
.factory("registService",function($http,configService){
  return{
    getData:function(name,password,callback){
      // 定义访问后天的接口地址
      var url = configService.getHostUrl() + '/regist.do?name='+name+'&password='+password+'&callback=JSON_CALLBACK'
        $http.jsonp(url)
      .success(function (data){
        // 将数据回调
        callback(data)
      })
    }
  }
})