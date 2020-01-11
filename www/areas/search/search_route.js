/** 
 * 搜索页面子路由
*/
angular.module('search.route',['search.controller'])
.config(function($stateProvider){
  $stateProvider
  .state(
    'search',{
      url:'/search',
      templateUrl:'./areas/search/search.html',
      controller:'SearchController'
    }
  )
})