/**
 * 回复评论的路由配置模块
 */
angular.module('replay.route',['replay.controller'])
.config(function($stateProvider){
    $stateProvider
    .state('replay',{
        url:'/replay',
        templateUrl:'areas/replay/replay.html',
        controller:'replayCtrl',
        params:{commentId:null}
    })
})