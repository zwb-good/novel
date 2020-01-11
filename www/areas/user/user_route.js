/**
 * 个人中心路由配置
  */
angular.module('user.route',['user.controller'])
.config(function($stateProvider){
    $stateProvider
    .state('user',{
        url:'/user',
        templateUrl:'areas/user/user.html',
        controller:'UserCtrl',
        params:{userId:null}
    })
})