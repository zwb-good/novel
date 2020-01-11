/**
 * 我的书评页路由配置
  */
angular.module('collect.route',['collect.controller'])
    .config(function($stateProvider){
        $stateProvider
        .state('collect',{
            url:'/collect',
            templateUrl:'areas/collect/collect.html',
            controller:'collectCtrl'
        })
    })  