/**
 * 书评的数据服务模块
*/
angular.module('bookReview.service',[])
.factory("bookReviewService",function($http,configService){
    return{
        //获取本书所有评论
        getComment:function(bookId,callback){
            var url = configService.getHostUrl() + '/CommentAction/getReplayAndReaderByBookId.do?bookId='+bookId+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        },

        //获取书本信息
        getBook:function(bookId,callback){
            var url = configService.getHostUrl() + '/admin/BookAction/novelIntroduce.do?bookId='+bookId+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        },

        //获取用户点赞信息
        likeComment:function(userId,callback){
            var url = configService.getHostUrl() + '/LikeAction/get.do?userId='+userId+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        },

        //用户点赞与取消点赞
        changeLike:function(userId,commentId,isLike,callback){
            var url = configService.getHostUrl() + '/LikeAction/update.do?userId='+userId+'&commentId='+commentId+'&isLike='+isLike+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        },

        //获取所有reader
        getReader:function(callback){
            var url = configService.getHostUrl() + '/admin/ReaderAction/getByPhone.do?callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        }
    }
})