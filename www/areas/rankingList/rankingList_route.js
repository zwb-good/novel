/**
 * 排行页路由配置
  */
angular.module('rankingList.route',['rankingList.controller'])
.config(function($stateProvider){
    $stateProvider
    .state(
        'rankingList',{
        url:'/rankingList',
        templateUrl:'./areas/rankingList/rankingList.html',
        controller:'rankingListCtrl'
    })
})  