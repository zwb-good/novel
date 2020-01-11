/**
 * 写评论数据服务模块 writeComment
 */
angular.module('writeComment.service',[])
.factory("writeCommentService",function($http,configService){
    return{
        addComment:function(bookId,userId,content,callback){
            // 定义访问后天的接口地址
            var url = configService.getHostUrl() + '/CommentAction/insert.do?userId='+userId+'&bookId='+bookId+'&content='+content+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        }
    }
})