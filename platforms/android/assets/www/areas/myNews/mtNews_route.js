/**
 * 我的消息页路由配置
  */
angular.module('myNews.route',['myNews.controller'])
    .config(function($stateProvider){
        $stateProvider
        .state('myNews',{
            url:'/myNews',
            templateUrl:'areas/myNews/myNews.html',
            controller:'myNewsCtrl'
        })
    })