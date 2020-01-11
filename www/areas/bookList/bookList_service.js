/**
 * 小说书单列表页数据服务模块
*/

angular.module('bookList.service',[])
.factory('bookListService',function($http,configService){
    return{
        //获取书城数据
        getData:function(condition,type,callback){
            var url = configService.getHostUrl()+'/admin/BookAction/searchByPhone.do?condition='+condition+'&type='+type+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function(data){
                callback(data); //返回数据
            })
        }
    }
})