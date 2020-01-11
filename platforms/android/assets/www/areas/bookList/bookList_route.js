/**
 * 小说列表页路由配置
  */
angular.module('bookList.route',['bookList.controller'])
.config(function($stateProvider){
    $stateProvider
    .state(
        'bookList',
        {
            url:'/bookList',
            templateUrl:'areas/bookList/bookList.html',
            controller:'bookListCtrl'
        }
    )
})  