/** 
 * 青春校园页面子路由
*/
angular.module('youthCampus.route',['youthCampus.controller'])
.config(function($stateProvider){
  $stateProvider
  .state(
    'youthCampus',{
      url:'/youthCampus',
      templateUrl:'./areas/youthCampus/youthCampus.html',
      controller:'YouthCampusController'
    }
  )
})