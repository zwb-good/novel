/**
 * 目录的路由配置模块
 */
angular.module('catalog.route',['catalog.controller'])
.config(function($stateProvider){
    $stateProvider
    .state('catalog',{
        url:'/catalog',
        templateUrl:'areas/catalog/catalog.html',
        controller:'catalogCtrl',
        params:{bookId:null,bookUrl:null}
    })
})