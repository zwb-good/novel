/**
 *我的消息页控制器
*/
angular.module('myNews.controller',['myNews.service'])
.controller('myNewsCtrl',function($scope,$state,myNewsService){
    //获取用户信息
    var userId = localStorage.getItem('userId')
    $scope.userId = userId
    $scope.headUrl = localStorage.getItem('headUrl')
    $scope.readerName = localStorage.getItem('readerName') //用户昵称

    //获取我的消息数据
    var ids = []
    var replays = []
    var myComment = []
    myNewsService.getMyNews(userId,function(data){
        for(var i in data.rows){
            myComment.push(data.rows[i])
            for(var j in data.rows[i].replaycomment){
                data.rows[i].replaycomment[j].time = dateFormat(data.rows[i].time,'yyyy-MM-dd')
                replays.push(data.rows[i].replaycomment[j])
            }
        }
        $scope.allData = replays
        for(var i in data.rows){
            ids.push(data.rows[i].id)
            data.rows[i].time = dateFormat(data.rows[i].time,'yyyy-MM-dd')
            data.rows[i].replaycomment.time = dateFormat(data.rows[i].time,'yyyy-MM-dd')
        }
        $scope.data = data.rows;
    })

    //页面渲染完之后将回复输入框隐藏
    $scope.$on('ngRepeatFinished', function( ngRepeatFinishedEvent ) {
        for(var i in replays){
            $("#replayInput_"+replays[i].id).hide()
            for(var j in myComment){
                if(myComment[j].id == replays[i].commentId){
                    $("#myself_"+replays[i].id).text(myComment[j].content)
                }
            }
        }
        myNewsService.clearMyNews(userId,function(data){
        })
    })

    //点击回复
    $scope.func_replay = function(id,commentId,toUserId){
        $("#replayInput_"+id).show()
        $("input").change(function(){
            var text = $("#replayTxt_"+id).val()
            myNewsService.secondReplay(commentId,userId,text,toUserId,id,function(data){
                showMsg('回复成功')
                $("#hiddenThis_"+id).hide
            }) 
        })
    }

    //点击返回，返回上一页
    $scope.func_back = function(){
        window.history.go(-1);
    }
}) 