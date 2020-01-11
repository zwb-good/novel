/**
 * 小说简介数据服务模块
*/

angular.module('novelIntroduction.service',[])
.factory('novelIntroductionService',function($http,configService){
    return{

        //获取书本数据
        getData:function(id,callback){
            var url = configService.getHostUrl()+'/admin/BookAction/novelIntroduce.do?bookId='+id+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function(data){
                callback(data); //返回数据
            })
        },

        //获取本书评论
        getComment:function(bookId,callback){
            var url = configService.getHostUrl() + '/CommentAction/get.do?bookId='+bookId+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        },

        //获取目录
        getCatalog:function(bookUrl,callback){
            var url = configService.getHostUrl()+'/BookAction/getCatalog.do?url='+bookUrl+'/txt&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function(data){
                callback(data); //返回数据
            })
        },

        //添加到书架
        addToBookshelf:function(userId,bookId,callback){
            var url = configService.getHostUrl()+'/CollectbookAction/insert.do?userId='+userId+'&bookId='+bookId+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function(data){
                callback(data); //返回数据
            })
        }
    }
})