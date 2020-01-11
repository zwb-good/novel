/**
 * 分类页路由配置
  */
angular.module('sort.route',['sort.controller'])
.config(function($stateProvider){
    $stateProvider
    .state('sort',{
        url:'/sort',
        templateUrl:'./areas/sort/sort.html',
        controller:'sortCtrl'
    })
})  