/**
 * 首页书架数据服务模块
  */
angular.module("home.service",[])
.factory("homeService",function($http,configService){
    return{
        getBook:function(userId,callback){
            // 定义访问后天的接口地址
            var url = configService.getHostUrl() + '/CollectbookAction/get.do?userId='+userId+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        }
    }
})