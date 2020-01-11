/**
 * 我的书评页路由配置
  */
angular.module('comment.route',['comment.controller'])
    .config(function($stateProvider){
        $stateProvider
        .state('comment',{
            url:'/comment',
            templateUrl:'areas/comment/comment.html',
            controller:'commentCtrl'
        })
    })  