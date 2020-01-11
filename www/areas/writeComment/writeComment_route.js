/**
 * 写评论路由配置模块
 */
angular.module('writeComment.route',['writeComment.controller'])
.config(function($stateProvider){
    $stateProvider
    .state('writeComment',{
        url:'/writeComment',
        templateUrl:'areas/writeComment/writeComment.html',
        controller:'writeCommentCtrl',
        params:{bookId:null}
    })
})