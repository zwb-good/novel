/**
 * 书评的控制模块
*/
angular.module('bookReview.controller',['bookReview.service'])
.controller('bookReviewCtrl',function($scope,bookReviewService,$state,$ionicLoading){
    $ionicLoading.show();
    $scope.state = 0;
    //获取上一页面传来的bookId
    var bookId = localStorage.getItem('bookId')
    var userId = localStorage.getItem('userId')

    //获取书本信息
    bookReviewService.getBook(bookId,function(data){
        $scope.bookInfo = data.rows
    })
    
    var allCommentId = []
    //定义获取本书的全部评论的方法
    var getAllComment = function(){
        bookReviewService.getComment(bookId,function(data){
            if(data.total == 0){
                showMsg('这本书还没有评论，赶紧做第一个评论者吧')
            }
            for(var i in data.rows){
                data.rows[i].time = dateFormat(data.rows[i].time,'yyyy-MM-dd')
                allCommentId.push(data.rows[i].id)
            }
            $scope.data = data.rows;
            $ionicLoading.hide();
        })
    }

    //获取本书的全部评论
    getAllComment();

    //页面渲染完之后将渲染已点赞评论
    $scope.$on('ngRepeatFinished', function( ngRepeatFinishedEvent ) {
        bookReviewService.likeComment(userId,function(data){
            for(var i in data.rows){
                for(var j in allCommentId){
                    if(data.rows[i].commentId == allCommentId[j] && data.rows[i].isLike == 1){
                        var a = data.rows[i].commentId
                        $("#likeCtrl_"+a).addClass("active")
                    }
                }
            }
            for(var i in allCommentId){
                $('#div_'+allCommentId[i]).hide()
            }
            allCommentId = []
        })
    })
    

    //点击返回，返回上一页
    $scope.func_back = function(){
        window.history.go(-1);
    }

    //查看回复一级书评
    $scope.replay = function(id){
        localStorage.setItem("commentId",id)
        localStorage.setItem("replayId",null)
        $state.go('replay')
    }

    //查看回复二级评论
    $scope.second_replay = function(id){
        localStorage.setItem("commentId",null)
        localStorage.setItem("replayId",id)
        $state.go('replay')
    }

    //查看评论的所有回复
    $scope.seeAll = function(id,num){
        var isShowIt = $("#isShow_"+id).is('.showIt')
        var txt = '共有'+num+'条回复'
        if(!isShowIt){
            $("#isShow_"+id).addClass("showIt")
            $("#isShow_"+id).text('点击收起')
            $("#div_"+id).show()
        }else{
            $("#isShow_"+id).removeClass("showIt")
            $("#isShow_"+id).text(txt)
            $("#div_"+id).hide()
        }
    }

　　//点赞效果实现
    $scope.func_like = function(id){
        var isActive = $("#likeCtrl_"+id).is('.active')
        var num = $("#likes_"+id).text()
        num = parseInt(num)
        if(isActive){
            bookReviewService.changeLike(userId,id,0,function(data){
                $("#likeCtrl_"+id).removeClass("active")
                $("#likes_"+id).text(num-1);
            })
        }else{
            bookReviewService.changeLike(userId,id,1,function(data){
                $("#likeCtrl_"+id).addClass("active")
                $("#likes_"+id).text(num+1);
            })
        }
    }
})