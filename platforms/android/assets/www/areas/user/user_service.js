/**
 * 用户信息页数据服务模块
*/
angular.module('user.service',[])
.factory("userService",function($http,configService){
    return{
        getData:function(userId,callback){
            // 定义访问后天的接口地址
            var url = configService.getHostUrl() + '/admin/ReaderAction/getReader.do?userId='+userId+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){   // 将数据回调
                callback(data)
            })
        },
        //修改信息
        saveChange:function(id,name,sex,signature,headUrl,callback){
            var url = configService.getHostUrl() + '/admin/ReaderAction/updateByPhone.do?id='+id+'&name='+name+'&sex='+sex+'&signature='+signature+'&headUrl='+headUrl+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){   // 将数据回调
                callback(data)
            })
        },
        //获取token
        getToken:function(key, callback) {
            //  请求后台获取七牛上传凭证token
            var url = configService.getHostUrl() + '/admin/TokenAction/getByPhone.do?key='+key+'&callback=JSON_CALLBACK'
            console.log('getToken：' + key)
            $http.jsonp(url)
            .success(function (data) {
                var resultData = JSON.stringify(data)
                callback(data)
              })
          }
    }
})