/** 
 * 搜索页面子路由
*/
angular.module('novelIntroduction.route',['novelIntroduction.controller'])
.config(function($stateProvider){
  $stateProvider
  .state(
    'novelIntroduction',{
      url:'/novelIntroduction',
      templateUrl:'./areas/novelIntroduction/novelIntroduction.html',
      controller:'novelIntroductionController',
      params:{bookId:null,bookUrl:null}
    }
  )
})