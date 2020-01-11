/**
 * 导航标签的子页面路由
  */
angular.module('tab.route',['tab.controller'])
.config(function($stateProvider){
    //$stateProvider 定义路由用的服务
    $stateProvider
    .state(
        'tab',{
            url:'/tab',
            abstract:true,
            templateUrl:'areas/tab/tab.html',
            controller:'TabCtrl'
        }
    )
})