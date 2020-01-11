/** 
 * 出版页面子路由
*/
angular.module('publish.route',['publish.controller'])
.config(function($stateProvider){
  $stateProvider
  .state(
    'publish',{
      url:'/publish',
      templateUrl:'./areas/publish/publish.html',
      controller:'PublishController'
    }
  )
})