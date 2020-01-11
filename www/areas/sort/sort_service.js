/**
 * 小说分类页数据服务模块
*/

angular.module('sort.service',[])
.factory('sortService',function($http,configService){
    return{
        //获取书城数据
        getData:function(callback){
            var url = configService.getHostUrl()+'/admin/NoveltypeAction/getByPhone.do?callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function(data){
                callback(data); //返回数据
            })
        }
    }
})