/**
 *我的书评页数据服务模块
*/
angular.module('comment.service',[])
.factory("commentService",function($http,configService){
    return{
        getData:function(userId,callback){
            // 定义访问后天的接口地址
            var url = configService.getHostUrl() + '/CommentAction/getByUserId.do?userId='+userId+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        },
        //删除评论
        delete:function(commentId,callback){
            var url = configService.getHostUrl() + '/CommentAction/deleteByPhone.do?id='+commentId+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        }
    }
})