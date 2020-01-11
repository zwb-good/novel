/**
 * 个性皮肤页路由配置
  */
angular.module('skin.route',['skin.controller'])
    .config(function($stateProvider){
        $stateProvider
        .state('skin',{
            url:'/skin',
            templateUrl:'areas/skin/skin.html',
            controller:'skinCtrl'
        })
    })  