/**
 * 首页路由
  */
angular.module('home.route',['home.controller'])
.config(function($stateProvider){
    $stateProvider
    .state('tab.home',{
        url:'/home',
        //指定模板的渲染位置
        views:{
            'tab-home':{
                templateUrl:'areas/home/home.html',
                controller:'HomeCtrl'
            }
        }
    })
})