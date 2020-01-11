/**
* 我的消息页数据服务模块
*/
angular.module('myNews.service',[])
.factory("myNewsService",function($http,configService){
    return{
        //获取我的消息数据
        getMyNews:function(userId,callback){
            var url = configService.getHostUrl() + '/CommentAction/getReplayAndReader.do?userId='+userId+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        },

        //获取我的回复消息数据
        getMyReplay:function(userId,callback){
            var url = configService.getHostUrl() + '/ReplayCommentAction/getAndReplay.do?toUserId='+userId+'&callback=JSON_CALLBACK'
            $http.jsonp(url)
            .success(function (data){
                // 将数据回调
                callback(data)
            })
        },

        //清空我的消息
        clearMyNews:function(userId,callback){
            var url =  configService.getHostUrl() + '/admin/ReaderAction/clearNews.do?userId='+userId+'&callback=JSON_CALLBACK'
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