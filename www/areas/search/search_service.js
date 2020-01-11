/**
 * 查找页数据服务模块
*/

/* angular.module('search.service',[])
.factory('searchService',function($http,configService){
    return{
        //获取书城数据
        getData:function(callback){
            var url = configService.getHostUrl()+'/novelType/get.do?callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function(data){
                callback(data); //返回数据
            })
        }
    }
}) */