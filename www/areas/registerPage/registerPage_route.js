/** 
 * 引导页的路由模块
*/

angular.module("registerPage.route",["registerPage.controller"])

.config(function($stateProvider){
  $stateProvider
  .state("registerPage",{
    url:"/registerPage",
    // 配置视图模板的相对路径，注意要以index.html为相对对象
    templateUrl:"./areas/registerPage/registerPage.html",
    controller:"RegisterPageController"  //配置控制器名称
  })
})