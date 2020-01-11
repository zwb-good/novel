/**
 * 回复评论的控制模块
*/
angular.module('replay.controller',['replay.service'])
.controller('replayCtrl',function($scope,replayService,$stateParams,$ionicPopup){
    //获取上一页面传来的commentId
    var commentId = localStorage.getItem('commentId');
    var replayId = localStorage.getItem('replayId');

    // 获取用户信息
    var userId = localStorage.getItem('userId');

    //点击返回，返回上一页
    $scope.func_back = function(){
        window.history.go(-1);
    }

    /**
     * 获取评论内容 
     * replayId为空从comment表中获取commentId的内容
     * commentId为空从replaycomment表中获取replayId的内容
     */
    var toUserId
    var comment_id
    if(commentId != 'null'){
        replayService.getComment(commentId,function(data){
            for(var i in data.rows){
                data.rows[i].time = dateFormat(data.rows[i].time,'yyyy-MM-dd HH:mm:ss')
            }
            $scope.data = data.rows;
        })
    }
    if(replayId != 'null'){
        replayService.getReplay(replayId,function(data){
            for(var i in data.rows){
                data.rows[i].time = dateFormat(data.rows[i].time,'yyyy-MM-dd HH:mm:ss')
            }
            $scope.data = data.rows;
            toUserId = data.rows[0].reader.userId
            comment_id = data.rows[0].commentId
        })
    }

    //点击回复
    $scope.func_replay = function(){
        var content = $("#input_replay").val();
        if(content.length == 0){
            showMsg('输入不能为空哦')
        }else{
            if(commentId != 'null'){
                replayService.replayComment(commentId,userId,content,function(data){
                    if(data.success){
                        showMsg('发表成功')
                        window.history.go(-1);
                    }
                })
            }
            if(replayId != 'null'){
                replayService.secondReplay(comment_id,userId,content,toUserId,replayId,function(data){
                    if(data.success){
                        showMsg('发表成功')
                        window.history.go(-1);
                    }
                })
            }
        }
    }
})