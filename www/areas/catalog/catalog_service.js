/**
 * 目录的数据服务模块
*/
angular.module('catalog.service',[])
.factory("catalogService",function($http,configService){
    return{
        getCatalog:function(bookUrl,callback){
            // 定义访问后天的接口地址
            var url = configService.getHostUrl() + '/BookAction/getCatalog.do?url='+bookUrl+'/txt&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        }
    }
})