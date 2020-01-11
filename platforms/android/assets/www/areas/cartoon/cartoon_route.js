/** 
 * 漫画子路由
*/
angular.module("cartoon.route",["cartoon.controller"])
  .config(function($stateProvider){
    $stateProvider
      .state("tab.cartoon",{
        url:"/cartoon",
        views:{
          'tab-cartoon':{
            templateUrl:"areas/cartoon/cartoon.html",
            controller:"CartoonController"  //配置控制器名称
          }
        }
      })
  })