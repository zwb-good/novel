/**
 * 写评论控制模块 
 */
angular.module('writeComment.controller',['writeComment.service'])
.controller('writeCommentCtrl',function($scope,writeCommentService,$stateParams,$state){
    //获取上一页面传来的bookId
    var bookId = localStorage.getItem('bookId')
    
    //获取用户信息
    var userId = localStorage.getItem('userId');
    
    //点击返回，返回上一页
    $scope.func_back = function(){
        window.history.go(-1);
    }

    //发布评论
    $scope.func_comment = function(){
        var text = $("#text_content").val();
        var content = text.substring(9,text.length)
        if(content.length == 0){
            showMsg('评论不能为空哦')
        }else{
            writeCommentService.addComment(bookId,userId,content,function(data){
                if(data.success){
                    $state.go('bookReview');
                }
            })
        }
    }
})