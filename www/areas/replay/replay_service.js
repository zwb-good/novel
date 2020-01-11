/**
 * 回复评论的数据服务模块
*/
angular.module('replay.service',[])
.factory("replayService",function($http,configService){
    return{
        //获取某条评论
        getComment:function(commentId,callback){
            var url = configService.getHostUrl() + '/CommentAction/getByCommentId.do?id='+commentId+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        },
        
        //获取某条评论
        getReplay:function(replayId,callback){
            var url = configService.getHostUrl() + '/ReplayCommentAction/getByReplayId.do?id='+replayId+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        },

        //评论或回复这条评论
        replayComment:function(commentId,userId,content,callback){
            var url = configService.getHostUrl() + '/ReplayCommentAction/insert.do?commentId='+commentId+'&userId='+userId+'&content='+content+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        },

        //回复二级评论
        secondReplay:function(commentId,userId,content,toUserId,replayId,callback){
            var url = configService.getHostUrl()+'/ReplayCommentAction/insert.do?commentId='+commentId+'&userId='+userId
                url += '&content='+content+'&toUserId='+toUserId+'&replayId='+replayId+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        }
    }
})